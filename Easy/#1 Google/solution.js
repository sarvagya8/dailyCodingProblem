// Brute Force
// O(N²)
function twoSum(arr, k) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; arr.length; j += 1) {
            if (i !== j && arr[i] + arr[j] === k) return true;
        }
    }
    return false;
}


// Bonus: One Pass
// O(N) since lookups of sets are O(1) each.
function twoSum(arr, k) {
    let seen = new Set();
    for (let num in arr) {
        if (seen.has(k - num)) return true;
        seen.add(num);
    }
    return false;
}