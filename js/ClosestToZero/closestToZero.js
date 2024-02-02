function closerToZero(a, b) {
    if (Math.abs(a) < Math.abs(b)) {
        return a;
    }
    else if (Math.abs(b) < Math.abs(a)) {
        return b;
    }
    else {
        return a > b ? a : b;
    }
}
function closestToZero(ts) {
    let result = ts[0]

    for (let index = 1; index < ts.length; index++) {
        result = closerToZero(result, ts[index])
    }
    return result
}

console.log(closestToZero([2.3, 5.6, 9.8, -1, -2.3, 1]))
console.log(closestToZero([2.3, 5.6, 9.8, -1, -2.3, -1]))
console.log(closestToZero([2.3, 5.6, 9.8, -1, -2.3, 2]))