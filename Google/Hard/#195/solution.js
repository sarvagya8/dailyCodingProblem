// O(M * N) Time
// O(1) Space
function computeEle(arr, i1, j1, i2, j2) {
    let result = 0;
    const min = arr[i1][j1];
    const max = arr[i2][j2];
    for (let i = 0; i < arr.length; i += 1) {
        const len = arr[i].length;
        if (arr[i][0] > max || arr[i][len - 1] < min) {
            result += len; 
            continue;
        }
        if (arr[i][0] >= min && arr[i][len - 1] <= max) continue;
        let j = 0;
        while (j < len) {
            if (arr[i][j] >= min) break;
            result += 1;
            j += 1;
        }
        j = len - 1;
        while(j > 0) {
            if (arr[i][j] <= max) break;
            result += 1;
            j -= 1;
        }
    }
    return result;
}
