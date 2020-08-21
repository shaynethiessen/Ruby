import type {IMessage} from '../../Types';

export default function SingleWord(parsedMessage: string): IMessage {
    let message = '';
    let type = '';

    switch (parsedMessage) {
        case 'bye':
            message = 'Bye';
            type = 'replyChannel';
            break;
        case 'goodbye':
            message = 'Good bye.';
            type = 'replyChannel';
            break;
        case 'hello':
            message = 'Hello.';
            type = 'replyChannel';
            break;
        case 'okay':
            break;
        case 'no':
            message = 'Okay.';
            type = 'replyChannel';
            break;
        case 'ping':
            message = 'Pong.';
            type = 'replyChannel';
            break;
        case 'pong':
            message = 'Ping.';
            type = 'replyChannel';
            break;
        case 'yes':
            message = 'Alright.';
            type = 'replyChannel';
            break;
    }

    return {
        type,
        message,
    };
}
