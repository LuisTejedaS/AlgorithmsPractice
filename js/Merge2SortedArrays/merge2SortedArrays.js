function mergeSortedArrays(arr1, arr2) {
    let sortedArray = []
    let arr1Index = 0
    let arr2Index = 0
    while (arr1Index < arr1.length && arr2Index < arr1.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            sortedArray.push(arr1[arr1Index])
            arr1Index++
        } else {
            sortedArray.push(arr2[arr2Index])
            arr2Index++
        }
    }

    while (arr1Index < arr1.length) {
        sortedArray.push(arr1[arr1Index])
        arr1Index++
    }
    while (arr2Index < arr1.length) {
        sortedArray.push(arr2[arr2Index])
        arr2Index++
    }

    return sortedArray
}



console.log(mergeSortedArrays([1, 2, 3, 5, 7], [4, 6, 8, 9, 10]))
console.log(mergeSortedArrays([4, 6, 8, 9, 10], [1, 2, 3, 5, 7])) 