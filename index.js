const path = require("path");
const {Bot, Persistence} = require("botmancer");
const config = require("./config.json");

process.env.TZ = "Europe/Warsaw";

const p = v => path.join(__dirname, v);

const persistence = new Persistence(p("persistence"));

const bot = new Bot({
    featuresDirPath: p("features"),
    internalStorageFilePath: p("internal"),
    namedChannels: config.channels,
    auth: config.auth,
    persistence
});

bot.login();
