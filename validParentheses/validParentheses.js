function perform(value) {
    let stack = []
    let closeToOpen = { ")": "(", "}": "{", "]": "[" }

    for (let index = 0; index < value.length; index++) {
        let c = value[index];
        if (closeToOpen[c]) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                // if (stack.length > 0 && stack.at(-1) === closeToOpen[c]) { //since node 16.6
                stack.pop()
            }
            else {
                return false;
            }
        }
        else if (Object.values(closeToOpen).find(x => { return c === x })) {
            stack.push(c)
        }

    }
    return stack.length === 0;
}

console.log(perform("(s)"))
console.log(perform(")("))
console.log(perform("[)(]"))
console.log(perform("(){}[]"))
