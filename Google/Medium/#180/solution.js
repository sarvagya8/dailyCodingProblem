// O(N) Time and Space
function interleave(stack) {
    let len = stack.length;
    
    let queue = stack.slice().reverse();

    for (let i = 0; i < Math.floor(len / 2); i += 1) queue.push(queue.shift());
    
    stack = queue.splice(0, Math.ceil(len / 2));
    
    for (let i = 0; i < Math.floor(len / 2); i += 1) {
        queue.push(stack.pop());
        queue.push(queue.shift());
    }
    if (stack) queue.push(stack.pop());

    while (queue[0]) stack.push(queue.shift());
    return stack;
}
