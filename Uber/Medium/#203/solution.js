// O(log N) Time
// O(1) Space 
function findMinElement(arr) {
    const low = 0;
    const high = arr.length - 1;
    return helper(arr, low, high);
}

function helper(arr, low, high) {
    if (high === low) return arr[low];
    
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] < arr[high]) high = mid;
    else low = mid + 1;
    return helper(arr, low, high);
}
