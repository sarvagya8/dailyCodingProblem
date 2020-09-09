// O(N) Time and Space
function smallestLevel(root) {
    if (!root) return null;
    let data;
    let val = {0: [root]};
    let i = 0;
    let sum = root.value;
    let level = 0;
    while (val[i].length) {
        let n = val[i];
        val[i + 1] = [];
        data = 0;
        for (let key of n) {
            data += key.value;
            if (key.left) val[i + 1].push(key.left);
            if (key.right) val[i + 1].push(key.right);
        }
        if (sum > data) {
            level = i;
            sum = data;
        }
        i += 1;
    }
    return level;
}



// Examples
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let tree1 = new Node(1, 
            new Node(-2), 
            new Node(-3, new Node(4), new Node(-5)))

let tree2 = new Node(1, 
            new Node(2, new Node(4), new Node(5, new Node(-1))), 
            new Node(3, null, new Node(6, new Node(-7), new Node(-8))));

console.log(smallestLevel(tree1)); // 1
console.log(smallestLevel(tree2)); // 3