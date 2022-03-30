
class TestRoute {
    async input(req, message) {
        message.NAME = message.API_USER_ID ? message.API_USER_ID : "UNAUTHORIZED";
    }
    async process(message) {
        message.NAME = message.NAME + " Muhammad Aamir";
        message.COMMENT = "Inside the folder";
    }
    async output(res, message) {
        res.responseBody.loopBackName = message.NAME;
        res.responseBody.comment = message.COMMENT
        res.status = "Success";
    }
}
module.exports = new TestRoute();
