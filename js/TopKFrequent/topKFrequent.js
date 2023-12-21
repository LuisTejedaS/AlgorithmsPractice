function perform(numbers, frequent) {
    let heap = {}
    let freq = []
    let res = []

    for (let index = 0; index < numbers.length; index++) {
        let value = numbers[index]
        heap[value] === undefined ? heap[value] = 1 : heap[value] = ++heap[value]
    }

    Object.entries(heap).forEach((n) => {
        if (freq[n[1]] === undefined) {
            freq[n[1]] = [n[0]]
        }
        else {
            freq[n[1]].push(n[0])
        }

    })

    for (let index = numbers.length - 1; index >= 0 && res.length < frequent; index--) {
        if (freq[index] !== undefined) {
            res.push(...freq[index])/// we could have more than k, need an iner loop
        }
    }

    return res
}

console.log(perform([1, 1, 1, 2, 2, 100], 2))
console.log(perform([1, 1, 1, 2, 2, 100], 1))
console.log(perform([1, 1, 1, 2, 2, 100], 3))