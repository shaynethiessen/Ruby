import SingleWord from './Response/SingleWord';
import type {IMessage} from '../Types';
import IsEmoji from './Process/IsEmoji';

export function Message(receivedMessage: string): IMessage | void {
	let parsedMessage = receivedMessage.toLowerCase();
	parsedMessage = parsedMessage.replace(/[^a-zA-Z0-9 ]/g, '');
	parsedMessage = parsedMessage.trim();

	let isEmoji = IsEmoji(parsedMessage);
	const wordCount = parsedMessage.split(' ').length;

	if(isEmoji) {
		return {
			message: '\\u{1F984}',
			type: 'replyChannel'
		}
	}
	else if(wordCount === 1) {
		return SingleWord(parsedMessage);
	} else {
		return {
			message: 'I have not yet been programmed with the capacity to understand what you are trying to say.',
			type: 'replyChannel'
		}
	}
}
