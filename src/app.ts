/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />

import NinuBot = require('./ninubot');

const ninubot = new NinuBot();
console.log(ninubot.getBornDate().format());
