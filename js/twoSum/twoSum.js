function perform(numbers, target){
    let map = {}

    for(let index = 0 ; index < numbers.length; index++){
        let current = numbers[index];
        let diff = target - current;
        if(map[diff] !== undefined){
            return [map[diff], index]
        }
        else{
            map[current] = index;
        }
    }
    return [-1, -1]
}

console.log(perform([2,1,5,3], 4))
console.log(perform([2,7,11,15], 9))