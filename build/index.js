"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var discord_js_1 = require("discord.js");
dotenv_1.config({ path: './.env' });
var bot = new discord_js_1.Client();
var TOKEN = process.env.DISCORD_BOT_TOKEN;
console.log(TOKEN);
bot.login(TOKEN);
bot.on('ready', function () {
    var _a;
    console.info("Logged in as " + ((_a = bot.user) === null || _a === void 0 ? void 0 : _a.tag) + "!");
});
bot.on('message', function (msg) {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
    else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
            var taggedUser = msg.mentions.users.first();
            msg.channel.send("You wanted to kick: " + (taggedUser === null || taggedUser === void 0 ? void 0 : taggedUser.username));
        }
        else {
            msg.reply('Please tag a valid user!');
        }
    }
});
