/**
 * Created by i82325 on 6/25/2019.
 */
var chakram = require("./node_modules/chakram/lib/chakram.js");
var chai = require("chai");
var options = {
    foo: "foo"
};
var baseURL='http://10.48.133.179:9090/RAMS/';
// var baseURL='http://localhost:9090/RAMS/';
var username='bibdahal';
var password='nepal123';

exports.options = options;
exports.chakram = chakram;
exports.chai = chai;
exports.assert = chai.assert;

exports.correctUsername=username;
exports.correctPassword=password;
exports.baseURL=baseURL;

async function getToken() {
    var url = baseURL + "authenticate";
    var requestData =
        {
            "username": username,
            "password": password,
        };
    return chakram.post(url, requestData).then(response => {
        return response.body.token;
    });
}

exports.getData=async function getAPIData(urlWithParam, payload) {
    var url = baseURL + urlWithParam;
    if (!payload) {
        return chakram.get(url, {
            headers: {
                'Authorization': 'Bearer ' + await getToken()
            }
        });
    } else {
        return chakram.put(url, payload, {
            headers: {
                'Authorization': 'Bearer ' + await getToken()
            }
        });
    }
}
