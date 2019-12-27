/**
 * Created by i82325 on 6/25/2019.
 */
var common = require("./../../common");
var requestObject = common.chakram,
    expect = requestObject.expect;
var username = common.correctUsername;
var password = common.correctPassword;
var baseURL = common.baseURL;

describe("Login Tests", function () {
    var url = baseURL + "authenticate";

    it("Verify login using correct username and password", function () {
        var requestData =
            {
                "username": username,
                "password": password,
            };
        var result = requestObject.post(url, requestData);
        expect(result).to.have.status(200);
        console.log("\t   1. Status code is 200");
        expect(result).to.have.schema({
                "required": [//for object dont use items
                    "token"
                ]
            }
        );
        console.log("\t   2. Json schema is a match");
        return requestObject.wait();
    });

    it("Verify login using correct username but wrong password", function () {
        var requestData =
            {
                "username": username,
                "password": "hello",
            };
        var response = requestObject.post(url, requestData);
        expect(response).to.have.status(401);
        console.log("\t   1. Status code is 401");
        return requestObject.wait();
    });

    it("Verify login using wrong username but wrong password", function () {
        var requestData =
            {
                "username": "hello",
                "password": "hello"
            };
        var response = requestObject.post(url, requestData);
        expect(response).to.have.status(401);
        console.log("\t   1. Status code is 401");
        return requestObject.wait();
    });

    it("Verify login using empty username and password", function () {
        var requestData =
            {
                "username": "",
                "password": ""
            };
        var response = requestObject.post(url, requestData);
        expect(response).to.have.status(401);
        console.log("\t   1. Status code is 401");
        return requestObject.wait();
    });

});