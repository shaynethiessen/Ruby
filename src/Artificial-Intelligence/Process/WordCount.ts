export function WordCount(phrase: string) {
    let wordCount = 0;

    // If phrase has a value, then the word count is at least one -STT
    if (phrase.length > 0) {
        wordCount++;
    }

    // Now we add one more word for each space.
    // This is kind of primitive, but it works.
    // It just won't account for user mistakes, like if they accidentally combine two words together -STT
    for (let i = 0; i <= phrase.length; i++) {
        if (phrase.charAt(i) == ' ') {
            wordCount++;
        }
    }

    return wordCount;
}