// O(N) Time and Space
function squareSort(arr) {
    let negative = [];
    let nonNegative = [];
    for (let num of arr) {
        if (num < 0) negative.push(num ** 2);
        else nonNegative.push(num ** 2);
    }
    negative.reverse();
    return merge(negative, nonNegative);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i += 1;
        } else if (left[i] > right[j]) {
            result.push(right[j]);
            j += 1;
        } else {
            result.push(left[i], right[j]);
            i += 1;
            j += 1;
        }
    }
    left = left.slice(i);
    right = right.slice(j);
    return result.concat(left).concat(right);
}



// Examples
console.log(squareSort([-9,-2,0,2,3])); // [0, 4, 4, 9, 81]