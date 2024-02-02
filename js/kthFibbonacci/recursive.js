function fibbonacci(n) {
    if (n < 2) {
        return n
    }
    else {
        return fibbonacci(n - 1) + fibbonacci(n - 2)
    }
}

function kthFibbo(nth) {
    let nthFib
    for (let i = 0; i < nth; i++) {
        nthFib = fibbonacci(i);
    }
    return nthFib
}

console.log(kthFibbo(1))
console.log(kthFibbo(2))
console.log(kthFibbo(3))
console.log(kthFibbo(4))
console.log(kthFibbo(5))
console.log(kthFibbo(6))
console.log(kthFibbo(7))
console.log(kthFibbo(13))