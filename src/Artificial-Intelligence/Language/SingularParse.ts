import {Greeting} from "../Dictionary/Greeting";

export function SingularParse(receivedMessage: string): string | undefined {

    switch(receivedMessage) {
        case 'bonjour':
            return Greeting();
        case 'hello':
            return Greeting();
        case 'hey':
            return Greeting();
        case 'hi':
            return Greeting();
        case 'howdy':
            return Greeting();
        case 'ping':
            return 'Pong';
        case 'pong':
            return 'Ping';
        case 'yo':
            return Greeting();
    }
}