// O(N) Time and Space
function printLevelOrder(root) {
    let node = root;
    if (!root) return [];
    let queue = [node];
    let data = [];
    while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return data;
}