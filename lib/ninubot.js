var moment = require('moment');
var NinuBot = (function () {
    function NinuBot() {
        this.born();
    }
    NinuBot.prototype.born = function () {
        this.bornDate = moment();
    };
    NinuBot.prototype.getBornDate = function () {
        return this.bornDate;
    };
    return NinuBot;
})();
module.exports = NinuBot;
