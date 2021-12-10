import * as n from "./SyncState.js"//const n = i(523),
import * as r from "./SyncIcons.js"//r = i(725);
let syncStateProperties = {
    [n.SyncState.undeterminedLatest]: {
        stateIcon: r.notSyncedIcon,
        uploadBtn: {
            class: "btn-orange",
            text: "Overwrite",
            title: "Latest sitemap version can't be determined. Overwrite sitemap in your Cloud account with this version of the sitemap"
        },
        downloadBtn: {
            class: "btn-orange",
            text: "Overwrite",
            title: "Latest sitemap version can't be determined. Overwrite this sitemap with the version from your Cloud account"
        },
        deleteBtn: true
    },
    [n.SyncState.latestCloud]: {
        stateIcon: r.notSyncedIcon,
        uploadBtn: {
            class: "btn-orange",
            text: "Overwrite",
            title: "Latest sitemap version is in your Cloud account. Overwrite sitemap in your Cloud account with this version of the sitemap"
        },
        downloadBtn: {
            class: "btn-success",
            text: "Update",
            title: "Latest sitemap version is in your Cloud account. Update this sitemap to match the version in your Cloud account"
        },
        deleteBtn: true
    },
    [n.SyncState.latestLocal]: {
        stateIcon: r.notSyncedIcon,
        uploadBtn: {
            class: "btn-success",
            text: "Update",
            title: "This is the latest sitemap version. Update sitemap in your Cloud account with this version of the sitemap"
        },
        downloadBtn: {
            class: "btn-orange",
            text: "Overwrite",
            title: "This is the latest sitemap version. Overwrite this sitemap with a version from your Cloud account"
        },
        deleteBtn: true
    },
    [n.SyncState.synced]: {
        stateIcon: r.syncedIcon,
        uploadBtn: undefined,
        downloadBtn: undefined,
        deleteBtn: true
    },
    [n.SyncState.cloud]: {
        stateIcon: r.syncCloudIcon,
        uploadBtn: undefined,
        downloadBtn: {
            class: "btn-success",
            text: "Download",
            title: "This sitemap is only in your Cloud account. Download the sitemap from your Cloud account to edit"
        },
        deleteBtn: false
    },
    [n.SyncState.local]: {
        stateIcon: r.syncLocalIcon,
        uploadBtn: {
            class: "btn-success",
            text: "Upload",
            title: "This sitemap is only in your extension storage. Upload the sitemap to your Cloud account"
        },
        downloadBtn: undefined,
        deleteBtn: true
    }
};

export {syncStateProperties}