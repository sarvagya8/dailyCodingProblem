// O(N) Time
// O(1) Space
function maximumCircularSubarray(arr) {
    const maxSubarraySumWraparound = arr.reduce((a, b) => a + b, 0) - minSubarraySum(arr);
    return Math.max(maxSubarraySumWraparound, maxSubArraySum(arr));
}

function maxSubArraySum(arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let x of arr) {
        maxEndingHere = Math.max(x, maxEndingHere + x);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

function minSubarraySum(arr) {
    let minEndingHere = 0;
    let minSoFar = 0;
    for (let x of arr) {
        minEndingHere = Math.min(x, minEndingHere + x);
        minSoFar = Math.min(minSoFar, minEndingHere);
    }
    return minSoFar;
}
console.log(maximumCircularSubarray([-4,5,1,0]));