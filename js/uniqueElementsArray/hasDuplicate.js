function perform(numbers) {
    let unique = new Set();
    let hasDup = false;

    for(let index = 0; index < numbers.length; index++){
        if(unique.has(numbers[index])){
            return true
        }
        unique.add(numbers[index]);
    }

    // numbers.forEach(numberInArray => {
    //     unique.has(numberInArray) ? hasDup = true : unique.add(numberInArray);
    // });

    return hasDup;
}

console.log(perform([2, 2, 3, 4, 5, 5, 4, 3, 1]))
console.log(perform([2, 2, 3, 4, 5, 5, 9, 4, 3, 1, 1, 8, 8]))
console.log(perform([1, 2, 3, 4, 5]))