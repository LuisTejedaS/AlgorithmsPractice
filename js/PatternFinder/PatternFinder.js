


function perform(pattern, entry) {
    let indexes = []
    let patternIndex = 0;
    for (let index = 0; index <= entry.length; index++) {
        let patternFound = true;
        if (patternIndex === pattern.length - 1) {
            if (patternFound) {
                indexes.push(index - (pattern.length - 1))
            }
            patternIndex = 0;
            patternFound = true
        }
        else if (pattern[patternIndex] !== entry[index]) {
            patternFound = false;
            patternIndex = 0;
        }
        else { patternIndex++; }
    }


    return indexes
}

console.log(perform('dep', 'departure'));
console.log(perform('dep', 'departuredepdep'));

//prefix dep departuredeparture