//87
class Arr {
    static mergeUnique(e, t) {
        return [...new Set([...e, ...t])];
    }

    static removeEmpty(e) {
        let t = e.length;
        for (; t--;) {
            e[t] || e.splice(t, 1);
        }
        return e;
    }

    static intersect(e, t) {
        return e.filter(e => t.includes(e));
    }

    static randomElement(e) {
        return e[Math.floor(Math.random() * e.length)];
    }

    static randomElements(e, t) {
        if (e.length <= t)
            return e;
        const newSet = new Set;
        const result = [];
        do {
            const t = Math.floor(Math.random() * e.length);
            newSet.has(t) || (result.push(e[t]), newSet.add(t));
        } while (result.length !== t);
        return result;
    }

    static exclude(e, t) {
        return e.filter(e => !t.includes(e));
    }

    static sortByObjectKey(e, t) {
        return e.sort((e, i) => e[t] < i[t] ? -1 : e[t] > i[t] ? 1 : 0);
    }

    static getDataColumns(e) {
        const t = new Set;
        for (const i of e)
            for (const e in i)
                t.add(e);
        return Array.from(t);
    }

    static delete(e, t) {
        e.splice(e.indexOf(t), 1);
        return  e;
    }
}

export {Arr}