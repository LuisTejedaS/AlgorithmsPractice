function perform(numbers){
    let pairs = []
    let odds = []
    let evens = []

    for(let index = 0 ; index < numbers.length; index++){
        let current = numbers[index];
        let isEven = current %2 === 0 ? true : false;
        if(isEven){
            if(odds.length > 0){
                let odd = odds.shift()
                pairs.push(odd + ", " + current)
            }
            else{
                evens.push(current)
            }
        }
        else{
            if(evens.length > 0){
                let even = evens.shift()
                pairs.push(even + ", " + current)
            }
            else {
                odds.push(current)
            }
        }
    }
    return odds.length === 0 && evens.length === 0
}

console.log(perform([2,1,5,3]))
console.log(perform([2,7,11,15]))
console.log(perform([2,7]))
