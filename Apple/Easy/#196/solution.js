
/*--------------   WIP    --------------*/

// O(N) Space and Time
function frequentSubtreeSum(root) {
    if (!root) return;

    let c = {};
    let max = 0;
    let key = 0;

    function getSubtreeSum(node) {
        if (!node) return 0;
        console.log(node, 'node');
        let s = node.val;
        const l = getSubtreeSum(node.left); 
        const r = getSubtreeSum(node.right);
        console.log(l, r,'left right');
        // c[s] = c[s] + 1 || 1;
        // if (c[s] > max) {
        //     max = c[s];
        //     key = s;
        // }
    }

    getSubtreeSum(root);
    console.log(c, 'obj');
    return key;
}

class Node {
    constructor(val, right = null, left = null) {
        this.val = val,
        this.right = right,
        this.left = left
    }
}

/*--------------   WIP    --------------*/

let c = new Node(2);
c.right = new Node(5);
c.left = new Node(-5);
console.log(c, 'c');
console.log(frequentSubtreeSum(c), 'func');