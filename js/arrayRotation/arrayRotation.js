function rotLeft(a, d) {
    // Write your code here
    let arr = []
    for(let index = 0; index < a.length; index++){
        let actualMoves = d%a.length
        let newPos = index - actualMoves
        if(newPos < 0){
            newPos = a.length - actualMoves + index
        }
        arr[newPos] = a[index]
    }
    return arr
}

console.log(rotLeft([1,2], 3))
console.log(rotLeft([1,2,3,4,5], 4))