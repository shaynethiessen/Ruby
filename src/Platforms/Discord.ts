import {debug} from 'debug';
import {Client} from 'discord.js';
import {config} from 'dotenv';

import {Message} from '../Artificial-Intelligence/Message';

config({path: './.env'});

const d = debug('Platforms.Discord');
const bot = new Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;

export function Discord(): void {
	bot.login(TOKEN);

	bot.on('ready', () => {
		d(`Logged in to Discord as ${bot.user?.tag}!`);
	});

	bot.on('message', msg => {
		if (!msg.author.bot) {
			const response = Message(msg.content);

			if(response) {
				switch (response.type) {
					case 'replyAt':
						msg.reply(response.message);
						break;
					case 'replyChannel':
						msg.channel.send(response.message);
						break;
				}
			}
		}
	});
}
