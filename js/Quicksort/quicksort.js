function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[Math.round(Math.random() * (arr.length-1))]
    //let pivot = arr[0]
    let less = arr.filter(item => { return item < pivot })
    let greater = arr.filter(item => { return item > pivot })
    return [...quicksort(less), pivot, ...quicksort(greater)]

}

console.log(quicksort([3,4,2,1,6,7,93,8,0]))
console.log(quicksort([3,4,2,1,6,7,93,8,0]))
console.log(quicksort([3,4,2,1,6,7,93,8,0]))
console.log(quicksort([3,4,2,1,6,7,93,8,0]))
console.log(quicksort([3,4,2,1,6,7,93,8,0]))
console.log(quicksort([3,4,2,1,6,7,93,8,0]))