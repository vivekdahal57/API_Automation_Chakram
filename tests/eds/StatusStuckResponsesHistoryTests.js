/**
 * Created by i82325 on 6/25/2019.
 */
var common = require("./../../common");
var requestObject = common.chakram,
    expect = requestObject.expect;
var getData = common.getData;
var assert = require('chai').assert;

var validSchema = [//for object dont use items
    'id',
    'client',
    'issue',
    'issueStatus',
    'issueDate',
    'issueDescription',
    'encounterCount',
    'fileSubmissionDate',
    'isa013',
    'transmissionType',
    'analystName',
    'comment'
];

describe("Status Stuck Responses Detail Tests", function () {

    it("Verify output for the request made in StatusStuckResponsesHistory page", async function () {
        return await getData("eds/StatusStuckResponsesHistory").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "properties": {
                    "content": {
                        "items": {//for array use items
                            "required": validSchema
                        }
                    }
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page with id=1", async function () {
        return await getData("eds/StatusStuckResponsesHistory/1").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({"required": validSchema});
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page with status=current", async function () {
        return await getData("eds/StatusStuckResponsesHistory?status=current").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "properties": {
                    "content": {
                        "items": {//for array use items
                            "required": validSchema
                        }
                    }
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page with status=current & issue=new", async function () {
        return await getData("eds/StatusStuckResponsesHistory?status=current&issue=new").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "properties": {
                    "content": {
                        "items": {//for array use items
                            "required": validSchema
                        }
                    }
                }
            });
            console.log("\t   3. Json schema is a match");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page with invalid status parameter", async function () {
        return await getData("eds/StatusStuckResponsesHistory?status=hello").then(out => {
            expect(out).to.have.status(400);
            console.log("\t   1. Status code is 400");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body.message).to.contain("Validation failed. Please provide valid query parameter value");
            console.log("\t   3. Validation failed text is a match");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page with client=Aetna", async function () {
        return await getData("eds/StatusStuckResponsesHistory?client=Aetna").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "properties": {
                    "content": {
                        "items": {//for array use items
                            "required": validSchema
                        }
                    }
                }
            });
            console.log("\t   3. Json schema is a match");
            expect(out.body.content[0].client).to.have.equal("Aetna");
            console.log("\t   4. Client name of first record is Aetna");
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page while updating comment value of id=1", async function () {
        var rowCount = 1;
        var payload = [
            {
                "id": 1,
                "comment": "Single comment update test via api call",
                "analystName": "Tilak Basnet"
            }];
        return await getData("eds/StatusStuckResponsesHistory/update", payload).then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body).to.equal(rowCount);
            console.log("\t   3. Updated row count=%s is a match", rowCount);
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page while updating more than one row", async function () {
        var rowCount = 6;
        var payload = [
            {
                "id": 2,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 3,
                "issueStatus": "Old",
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 4,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 5,
                "issueStatus": "New",
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 6,
                "comment": "Multiple comment update test via api call",
                "analystName": "Tilak Basnet"
            }, {
                "id": 7,
                "issueStatus": "New",
                "analystName": "Tilak Basnet"
            }];
        return await getData("eds/StatusStuckResponsesHistory/update", payload).then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out.body).to.equal(rowCount);
            console.log("\t   3. Updated row count=%s is a match", rowCount);
        });
    });

    it("Verify output for the request made in StatusStuckResponsesHistory page when page=1 and size=10 is provided as params", async function () {
        return await getData("eds/StatusStuckResponsesHistory?page=0&size=10").then(out => {
            expect(out).to.have.status(200);
            console.log("\t   1. Status code is 200");
            expect(out).to.have.header("content-type", /json/);
            console.log("\t   2. Data type is application/json");
            expect(out).to.have.schema({
                "properties": {
                    "content": {
                        "items": {//for array use items
                            "required": validSchema
                        }
                    }
                }
            });
            console.log("\t   3. Json schema is a match");
            assert.isAtMost(out.body.content.length, 10, "\t   4. List is either less than or equals to 10.");
        });
    });

});