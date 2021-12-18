import {default as s} from "../../log/log.js";//s = i(5),
import * as a from "../../common/Async.js"//a = i(22),
import * as o from "../database/keyValueStorage.js"// o = i(591)
import * as r from "axios/index"//const r = i(502) ;

class SurveyClient {
    constructor(e) {
        this.surveyServer = "https://www.webscraper.io/";
        this.surveyInterval = 14400000;
        this.statId = e.statId;
        this.userSitemapCount = e.userSitemapCount;
        this.userRecordCount = e.userRecordCount;
    }

    async getLastTimeUpdated() {
        return await o.keyValueStorage.get("time-surveys-updated", 0);
    }

    async getSurveys() {
        const e = await o.keyValueStorage.get("surveys", "[]");
        try {
            return JSON.parse(e);
        } catch (e) {
            return [];
        }
    }

    async getCompletedSurveys() {
        const e = await o.keyValueStorage.get("completed-surveys", "[]");
        try {
            return JSON.parse(e);
        } catch (e) {
            return [];
        }
    }

    async getLastTimeSurveyCompleted() {
        return await o.keyValueStorage.get("last-time-survey-completed", 0);
    }

    async fetchSurveysFromRemote() {
        const questions = (await r.default.get(this.surveyServer + "surveys/surveys.json")).data;
        if ("object" == typeof questions)
            return questions;
        return JSON.parse(questions);
    }

    async updateSurveys() {
        if (!(86400000 + (await this.getLastTimeUpdated()) > Date.now())) {
            try {
                const e = await this.fetchSurveysFromRemote();
                await o.keyValueStorage.set("surveys", JSON.stringify(e));
            } catch (e) {
                await o.keyValueStorage.set("surveys", JSON.stringify([]));
            }
            await o.keyValueStorage.set("time-surveys-updated", Date.now());
        }
    }

    async getSurvey() {
        try {
            const next_survey_time = (await this.getLastTimeSurveyCompleted()) + this.surveyInterval;
            if (Date.now() < next_survey_time)
                return;
            await this.updateSurveys();
            const surveys = await this.getSurveys();
            const completed_surveys = await this.getCompletedSurveys();
            for (const survey of surveys)
                if (!(survey.minDataScraped > this.userRecordCount || survey.minSitemaps > this.userSitemapCount || completed_surveys.includes(survey.id)))
                    return survey;
        } catch (exception) {
            s.error("An error occurred while fetching surveys", {
                error: exception.toString()
            });
        }
    }

    async submitSurveyToRemote(e) {
        await r.default.post(this.surveyServer + "surveys/submit-survey", e, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async submitSurvey(e) {
        e.responseId = this.statId;
        e.userSitemapCount = this.userSitemapCount;
        e.userRecordCount = this.userRecordCount;

        for (let t = 0; t < 3;)
            try {
                await this.submitSurveyToRemote(e);
                const completed_survery = await this.getCompletedSurveys();
                completed_survery.push(e.surveyId);
                await o.keyValueStorage.set("completed-surveys", JSON.stringify(completed_survery));
                await o.keyValueStorage.set("last-time-survey-completed", Date.now());
                break;
            } catch (exception) {
                s.error("an error occurred while submitting survey", {
                    error: exception.toString()
                });
                t++;
                await a.Async.sleep(10000);
            }
    }
}

export {SurveyClient}