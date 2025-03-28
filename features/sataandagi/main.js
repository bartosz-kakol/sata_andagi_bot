const {Feature} = require("botmancer");
const {AttachmentBuilder} = require("discord.js");

module.exports = class extends Feature {
    init() {
        setInterval(() => {
            this.bot.channels["main"].send({ files: [new AttachmentBuilder("assets/sata_andagi.png")] });
        }, 1000);
    }
};
