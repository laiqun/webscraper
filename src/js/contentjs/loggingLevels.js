let loggingLevels = {};
loggingLevels.Error = 0;
loggingLevels.Warning = 1;
loggingLevels.Notice = 2;
loggingLevels.Profile = 3;
loggingLevels.Info = 4;
loggingLevels.Debug = 5;
loggingLevels[loggingLevels.Error] = "Error";
loggingLevels[loggingLevels.Warning] = "Warning";
loggingLevels[loggingLevels.Notice] = "Notice";
loggingLevels[loggingLevels.Profile] = "Profile";
loggingLevels[loggingLevels.Info] = "Info";
loggingLevels[loggingLevels.Debug] = "Debug";


export {loggingLevels};