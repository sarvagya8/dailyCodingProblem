// O(N) Time
// O(1) Space
// Iterative Version
function deepest(node) {
    if (!node.data) return null;

    let deep = {level: -1};
    const stack = [[node, 0]];

    while (stack.length) {
        const [curr, level] = stack.pop();
        
        if (curr) {
            if (level > deep.level) deep = {node: curr, level: level};
            
            stack.push([curr.left, level + 1], [curr.right, level + 1]);
        }
    }

    console.log(deep.node.data, deep.level); // leaf and it's depth
}