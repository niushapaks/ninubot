/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
var NinuBot = require('./ninubot');
var ninubot = new NinuBot();
console.log(ninubot.getBornDate().format());
