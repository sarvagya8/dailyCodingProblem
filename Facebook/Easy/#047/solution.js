// O(N²) Time
function buyAndSell(arr) {
    let maxProfit = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            let buyPrice = arr[i];
            let sellPrice = arr[j];
            maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
        }
    }
    return maxProfit;
}

// O(N) Time
// O(1) Space
function buyAndSell(arr) {
    let currentMax = 0;
    let maxProfit = 0;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        currentMax = Math.max(currentMax, arr[i]);
        const potentialProfit = currentMax - arr[i];
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    console.log(maxProfit);
    return maxProfit;
}