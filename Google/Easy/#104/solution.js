// O(N) Time and Space
function getValues(node) {
    let arr = [];
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

function isPalindrome(node) {
    let values = getValues(node);
    let i = 0;
    let j = values.length - 1;
    while (i < j) {
        if (values[i] != values[j]) return false;
        i += 1;
        j -= 1;
    }
    return true;
}