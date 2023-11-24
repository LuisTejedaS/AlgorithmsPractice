
function perform(term, words) {
    let result = []
    words.forEach(word => {
        if (word.length >= term.length && word.slice(0, term.length) === term) {
            result.push(word)
        }
    });
    return result;
}

// deal, denmark, dog
console.log(perform('d', ['deal', 'denmark', 'dog']))
console.log(perform('de', ['deal', 'denmark', 'dog']))
console.log(perform('do', ['deal', 'denmark', 'dog']))
console.log(perform('dog', ['deal', 'denmark', 'dog']))
