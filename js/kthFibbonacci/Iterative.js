function kthFibbo(k) {
    if (k === 1) {
        return 0
    }
    if (k === 2) {
        return 1
    }

    let it = 3
    let n1 = 1;
    let n2 = 0;
    let kthFibbo = 1
    while (it <= k) {
        kthFibbo = n1 + n2;
        n2 = n1
        n1 = kthFibbo
        it++
    }
    return kthFibbo;

}

console.log(kthFibbo(1))
console.log(kthFibbo(2))
console.log(kthFibbo(3))
console.log(kthFibbo(4))
console.log(kthFibbo(5))
console.log(kthFibbo(6))
console.log(kthFibbo(7))
console.log(kthFibbo(13))