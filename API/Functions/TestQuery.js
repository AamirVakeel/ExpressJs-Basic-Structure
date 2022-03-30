const req = require("express/lib/request");

class TestRoute {
    async input(req, message) {
        message.NAME = message.API_USER_ID ? message.API_USER_ID : "UNAUTHORIZED";
        message.ID = req.params.id ? req.params.id : "NOTHING";
        message.ID2 = req.query.id ? req.query.id : "NOID";
    }
    async process(message) {
        message.NAME = message.NAME + " Muhammad Aamir " + message.ID + " " + message.ID2;
    }
    async output(res, message) {
        res.responseBody.loopBackName = message.NAME;
        res.status = "Success";
    }
}
module.exports = new TestRoute();
