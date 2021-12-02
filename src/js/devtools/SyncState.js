//523
let SyncState = {};
SyncState.undeterminedLatest = 0;
SyncState.latestCloud = 1;
SyncState.latestLocal = 2;
SyncState.synced = 3;
SyncState.cloud = 4;
SyncState.local = 5;
SyncState[SyncState.undeterminedLatest] = "undeterminedLatest";
SyncState[SyncState.latestCloud] = "latestCloud";
SyncState[SyncState.latestLocal] = "latestLocal";
SyncState[SyncState.synced] = "synced";
SyncState[SyncState.cloud] = "cloud";
SyncState[SyncState.local] = "local";

export {SyncState}