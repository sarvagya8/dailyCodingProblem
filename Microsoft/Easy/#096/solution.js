// O(N!) Time and Space
function permute(nums) {
    function helper(nums, index, output) {
        if (index === nums.length - 1) output.push(nums.slice());
        for (let i = index; i < nums.length; i += 1) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            helper(nums, index + 1, output);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    let output = [];
    helper(nums, 0, output);
    return output;
}
console.log(permute([1, 2, 3]));