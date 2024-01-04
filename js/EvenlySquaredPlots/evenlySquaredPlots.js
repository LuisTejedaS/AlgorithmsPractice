function perform(long, short) {
    if (long % short === 0) {
        return ([short, short])
    }
    let remain = long % short
    let newShort = Math.min(remain, short)
    let newLong = Math.max(remain, short)
    return perform(newLong, newShort)
}
console.log(perform(50, 25))
console.log(perform(1680, 640))
console.log(perform(1680, 80))
console.log(perform(1680, 70))
console.log(perform(1680, 65))
console.log(perform(1680, 65))
console.log(perform(97, 89))