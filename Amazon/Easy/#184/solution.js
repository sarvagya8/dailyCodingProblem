// O()
function gcd(nums) {
    let n = nums[0];
    for (let i = 1; i < nums.length; i += 1) n = _gcd(n, nums[i]);
    return n;
}

function _gcd(a, b) {
    while (b) {
        a = b;
        b = a % b;
    }
    return a;
} 
console.log(gcd([2,4,6,8]));