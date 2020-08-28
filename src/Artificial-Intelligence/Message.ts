import {SingularParse} from "./Language/SingularParse";
import {WordCount} from "./Process/WordCount";

interface IMessage {
	type: string | undefined;
	message: string | undefined;
}

export function Message(receivedMessage: string): IMessage {

	let message;
	let type;

	const parsedReceivedMessage = receivedMessage.toLowerCase();
	const wordCount = WordCount(parsedReceivedMessage);

	if(wordCount === 1) {
		message = SingularParse(parsedReceivedMessage);
	}

	// Checks if the AI gave us a response
	if(message !== undefined) {
		type = 'replyChannel';
	}

	return {
		type,
		message,
	};
}
