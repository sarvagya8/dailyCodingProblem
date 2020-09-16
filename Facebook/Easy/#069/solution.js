// O(N Log N) Time
// O(1) Space
function maxiumProductOfThree(arr) {
    arr.sort((a, b) => a - b);
    let len = arr.length,
        thirdLargest = arr[len - 3], 
        secondLargest = arr[len - 2], 
        firstLargest = arr[len - 1], 
        firstSmallest = arr[0], 
        secondSmallest = arr[1];
    return Math.max(thirdLargest * secondLargest * firstLargest, firstLargest * firstSmallest * secondSmallest); 
}


// O(N) Time
// O(1) Space
function maxiumProductOfThree(arr) {
    let max1 = -Infinity,
        max2 = -Infinity,
        max3 = -Infinity,
        min1 = Infinity,
        min2 = Infinity;

    for (let num of arr) {
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) max3 = num;

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) min2 = num;
    }
    
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
