/**
 * Created by i82325 on 6/25/2019.
 */
var common = require("./../../common");
var requestObject = common.chakram,
    expect = requestObject.expect;
var getData = common.getData;
var assert = require('chai').assert;

describe("Process Merge Detail Tests", function () {

    it("Verify output for the request made in Process Merge Detail page", async function () {
        return await getData("raps/ProcessMergeDetails").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "items": {//for array use items
                    "required": [//for object dont use items
                        "id",
                        "client",
                        "issue",
                        "issueStatus",
                        "issueDate",
                        "issueDescription",
                        "startDate",
                        "endDate",
                        "runTime",
                        "analystName",
                        "comment"
                    ]
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in Process Merge Detail page with id=2", async function () {
        return await getData("raps/ProcessMergeDetails/2").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "required": [//for object dont use items
                    "id",
                    "client",
                    "issue",
                    "issueStatus",
                    "issueDate",
                    "issueDescription",
                    "startDate",
                    "endDate",
                    "runTime",
                    "analystName",
                    "comment"
                ]
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in Process Merge Detail page with status=current", async function () {
        return await getData("raps/ProcessMergeDetails?status=current").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "items": {//for array use items
                    "required": [//for object dont use items
                        "id",
                        "client",
                        "issue",
                        "issueStatus",
                        "issueDate",
                        "issueDescription",
                        "startDate",
                        "endDate",
                        "runTime",
                        "analystName",
                        "comment"
                    ]
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in Process Merge Detail page with status=current & issue=new", async function () {
        return await getData("raps/ProcessMergeDetails?status=current&issue=new").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "items": {//for array use items
                    "required": [//for object dont use items
                        "id",
                        "client",
                        "issue",
                        "issueStatus",
                        "issueDate",
                        "issueDescription",
                        "startDate",
                        "endDate",
                        "runTime",
                        "analystName",
                        "comment"
                    ]
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in Process Merge Detail page with invalid status parameter", async function () {
        return await getData("raps/ProcessMergeDetails?status=hello").then(out => {
            expect(out).to.have.status(400);
            console.log("\t   1. Status code is 400");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body.message).to.contain("Validation failed. Please provide valid query parameter value");
            console.log("\t   3. Validation failed text is a match");
        });
    });

    it("Verify output for the request made in Process Merge Detail page with client=AETIH", async function () {
        return await getData("raps/ProcessMergeDetails?client=AETIH").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "items": {//for array use items
                    "required": [//for object dont use items
                        "id",
                        "client",
                        "issue",
                        "issueStatus",
                        "issueDate",
                        "issueDescription",
                        "startDate",
                        "endDate",
                        "runTime",
                        "analystName",
                        "comment"
                    ]
                }
            });
            console.log("\t   3. Json schema is a match");
            expect(out.body.content[0].client).to.have.equal("AETIH");
            console.log("\t   4. Client name of first record is AETIH");
        });
    });

    it("Verify output for the request made in Process Merge Detail page while updating comment value of id=2", async function () {
        var rowCount = 1;
        var payload = [
            {
                "id": 2,
                "comment": "Single comment update test via api call",
                "analystName": "Tilak Basnet"
            }];
        return await getData("raps/ProcessMergeDetails/update", payload).then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body).to.equal(rowCount);
            console.log("\t   3. Updated row count=%s is a match", rowCount);
        });
    });

    it("Verify output for the request made in Process Merge Detail page while updating more than one row", async function () {
        var rowCount = 6;
        var payload = [
            {
                "id": 3,
                "issueStatus": "Closed",
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 4,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 5,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 6,
                "issueStatus": "New",
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 7,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 8,
                "issueStatus": "New",
                "analystName": "Tilak Basnet"
            }];
        return await getData("raps/ProcessMergeDetails/update", payload).then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body).to.equal(rowCount);
            console.log("\t   3. Updated row count=%s is a match", rowCount);
        });
    });

    it("Verify output for the request made in Process Merge Detail page when page=0 and size=10 is provided as params", async function () {
        return await getData("raps/ProcessMergeDetails?page=0&size=10").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "items": {//for array use items
                    "required": [//for object dont use items
                        "id",
                        "client",
                        "issue",
                        "issueStatus",
                        "issueDate",
                        "issueDescription",
                        "startDate",
                        "endDate",
                        "runTime",
                        "analystName",
                        "comment"
                    ]
                }
            });
            console.log("\t   3. Json schema is a match");
            assert.isAtMost(out.body.content.length, 10, "\t   4. List is either less than or equals to 10.");
        });
    });
});