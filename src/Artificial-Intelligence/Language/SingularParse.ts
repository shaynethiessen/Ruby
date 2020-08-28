export function SingularParse(receivedMessage: string): string | undefined {

    switch(receivedMessage) {
        case 'ping':
            return 'Pong.';
        case 'pong':
            return 'Ping.';
    }
}