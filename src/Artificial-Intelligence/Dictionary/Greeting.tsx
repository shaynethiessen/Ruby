import {RandomNumber} from "../Process/RandomNumber";

export function Greeting() {
    console.log(RandomNumber(0, greetings.length));
    return greetings[RandomNumber(0, greetings.length)];
}

const greetings = ['Hello', 'Hey', 'Hey there', 'Hi']