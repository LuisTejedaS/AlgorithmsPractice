function getDistance(interval) {
    return interval[1] - interval[0]
}

function getBoundaries(intervals) {
    let lower = intervals[0][0];
    let upper = intervals[0][0];

    intervals.forEach(interval => {
        if (interval[0] < lower) {
            lower = interval[0]
        }
        if (interval[1] > upper) {
            upper = interval[1]
        }
    });
    return [lower, upper];
}

function perform(intervals) {
    let boundaries = getBoundaries(intervals);
    let res = []

    for (let i = boundaries[0]; i <= boundaries[1]; i++) {
        for (let j = 0; j <= boundaries[1]; j++) {
            fits = intervals.filter(interval => {
                if (i < j && (i >= interval[0] && i <= interval[1] || j <= interval[1] && j >= interval[0]))
                    return true
            });
            if (fits && fits.length === intervals.length) {
                if (res.length > 0) {
                    let prevDistance = getDistance(res[0])
                    let currentDistance = getDistance([i, j])
                    if (prevDistance > currentDistance) {
                        res = [[i, j]]
                    }
                    else if (prevDistance === currentDistance) {
                        res.push([i, j])
                    }
                }
                else {
                    res.push([i, j])
                }
            }

        }
    }

    return res;
}





console.log(perform([[0, 3], [2, 6], [3, 4], [6, 9]]))
console.log(perform([[0, 1], [3, 4]]))
console.log(perform([[0, 2], [1, 3], [0, 4]]))

