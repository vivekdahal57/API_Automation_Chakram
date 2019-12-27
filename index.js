/**
 * Created by i82325 on 6/25/2019.
 */

var common = require("./common");
function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("RAMS API Test Automation", function () {
    before(function () {
        console.log("Before All");
    });
    importTest("Login Page", './tests/raps/LoginTests');
    importTest("Upload Detail Page", './tests/raps/UploadDetailTests');
    importTest("Failed Upload Detail Page", './tests/raps/FailedUploadDetailTests');
    importTest("Folder Detail Page", './tests/raps/FolderDetailTests');
    importTest("Job History Page", './tests/raps/JobHistoryTests');
    importTest("Batch Detail Page", './tests/raps/BatchDetailTests');
    importTest("Process Merge Detail Page", './tests/raps/ProcessMergeDetailTests');
    importTest("Process RPC Detail Page", './tests/raps/ProcessRPCDetailTests');
    importTest("Process CN Detail Page", './tests/raps/ProcessCNDetailTests');
    importTest("Process CS Detail Page", './tests/raps/ProcessCSDetailTests');
    importTest("Outbound Detail Page", './tests/raps/OutboundDetailTests');
    importTest("File QC Detail Page", './tests/raps/FileQCDetailTests');
    importTest("Return QC Detail Page", './tests/raps/ReturnQCDetailTests');
    importTest("Batch QC Detail Page", './tests/raps/BatchQCDetailTests');
    //eds tests
    importTest("Job History Page", './tests/eds/JobHistoryTests');
    importTest("Inbound Folder History Page", './tests/eds/InboundFolderHistoryTests');
    importTest("File Statuses History Page", './tests/eds/FileStatusesHistoryTests');
    importTest("Encounter Statuses History Page", './tests/eds/EncounterStatusesHistoryTests');
    importTest("Invalid H Plan History Page", './tests/eds/InvalidHPlansHistoryTests');
    importTest("Missing CMS Responses History Page", './tests/eds/MissingCMSResponsesHistoryTests');
    importTest("Sup Missing CMS Responses History Page", './tests/eds/SupMissingCMSResponsesHistoryTests');
    importTest("Status Stuck Responses History Page", './tests/eds/StatusStuckResponsesHistoryTests');
    importTest("Sup Encounter Statuses History Page", './tests/eds/SupEncounterStatusesHistoryTests');
    importTest("Sup Invalid H Plan History Page", './tests/eds/SupInvalidHPlansHistoryTests');
    importTest("Sup Status Stuck Resp History Page", './tests/eds/SupStatusStuckRespHistoryTests');
    after(function () {
        console.log("After All");
    });
});