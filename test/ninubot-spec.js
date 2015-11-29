var NinuBot = require("../lib/ninubot");

describe("ninubot", function () {
  it("should have a valid moment born date", function () {
    var ninubot = new NinuBot();
    expect(ninubot.getBornDate().isValid()).toBe(true);
    console.log("date de naissance : " + ninubot.getBornDate().format());
  });
});
