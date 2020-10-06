// O(N) Time
// O(1) Space
function countInvalidParentheses(str) {
    let opened = 0;
    let invalid = 0;
    for (let c of str) {
        if (c === '(') opened += 1;
        else if (c === ')') {
            if (opened > 0) opened -= 1;
            else invalid += 1;
        }
    }
    return invalid + opened;
}
