interface IMessage {
	type: string;
	message: string;
}

export function Message(receivedMessage: string): IMessage {
	let message = '';
	let type = '';

	if (receivedMessage === 'ping') {
		message = 'pong';
		type = 'replyChannel';
	}

	if (receivedMessage === 'pong') {
		message = 'ping';
		type = 'replyChannel';
	}

	return {
		type,
		message,
	};
}
