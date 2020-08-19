import {config} from 'dotenv';
import {Client} from 'discord.js';

config({ path: './.env' });

const bot = new Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user?.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');

    } else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You wanted to kick: ${taggedUser?.username}`);
        } else {
            msg.reply('Please tag a valid user!');
        }
    }
});
