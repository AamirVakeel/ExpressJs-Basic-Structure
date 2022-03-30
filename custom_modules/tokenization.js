
var jwt = require('jsonwebtoken');
var config = require('../Configurations/ConfigParams');
class tokenization {
    generateUserToken(userId) {
        var token = jwt.sign({ userId: userId }, config.secret);
        return token;
    }
    verifyLoginToken(token) {
        var decode = jwt.verify(token, config.secret, function (err, decoded) {
            if (err)
                return null;
            else
                return decoded;
        });
        return decode ? decode.userId : null;
    }
}
module.exports = new tokenization();