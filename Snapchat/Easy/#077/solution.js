// O(N log N) Time
function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    result[0] = intervals[0];
    for (i = 1; i < intervals.length; i++) {
        let previous = result[result.length - 1];
        let current = intervals[i];
        if (current[0] <= previous[1]) {
            if (current[1] > previous[1]) previous[1] = current[1];
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
}
merge([
    [1, 3],
    [5, 8],
    [4, 10],
    [20, 25]
]);