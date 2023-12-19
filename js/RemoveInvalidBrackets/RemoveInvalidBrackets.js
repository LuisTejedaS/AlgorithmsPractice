
function perform(param) {
    let stack = []
    let paramLength = param.length;
    // let output = (' ' + param).slice(1);
    let output =  param.slice(0);
    let removedChars = 0;

    for (let index = 0; index < paramLength; index++) {
        let character = param[index]
        if (character === "[") {
            stack.push({ index, character })
        }
        if (param[index] === "]") {
            stack.pop(character)
        }
    }

    stack.forEach(item => {
        output = removeFromString(output, item.index - removedChars);
        removedChars++;
    })
    return output;

}
function removeFromString(param, index) {
    return param.slice(0, index) + param.slice(index + 1, param.length);
}
//[[]]
// ][
// [add[dd]]sd[]

console.log(perform("[]"))
console.log(perform("[[]["))
console.log(perform("[[]["))
console.log(perform("[[]"))
console.log(perform("[[ggff]ggghh[]["))
