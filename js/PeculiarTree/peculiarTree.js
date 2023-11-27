function perform(stringTree) {
    let depth = 0;
    let currentDepth = 0;

    [...stringTree].forEach(char => {
        if (char === '(') {
            currentDepth++;
        }
        else if (char === ')') {
            currentDepth--;
        }

        if (currentDepth > depth) {
            depth = currentDepth;
        }

    });
    return depth;
}

//(00) a node no children depth1
//((00)(00)) a node 2 children depth 2

console.log(perform('(00)'));
console.log(perform('((00)(00))'));
console.log(perform('((((00)0)0)0)'));

console.log(perform('((00)((00)0))'));