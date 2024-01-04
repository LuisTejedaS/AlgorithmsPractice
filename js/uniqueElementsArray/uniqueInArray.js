function perform(numbers) {
    let unique = {}

    numbers.forEach(numberInArray => {
        unique[numberInArray] = unique[numberInArray] === undefined ? 1 : 2;
    });

    return Object.keys(unique).find(key => {
        return unique[key] === 1 ? true : false
    });
}

console.log(perform([2, 2, 3, 4, 5, 5, 4, 3, 1]))
console.log(perform([2, 2, 3, 4, 5, 5, 9, 4, 3, 1, 1, 8, 8]))