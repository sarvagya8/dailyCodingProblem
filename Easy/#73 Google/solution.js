// O(N) Time
// O(N) Space
function reverse(head, prev = null) {
    if (!head) return prev;
    let tmp = head.next;
    head.next = prev;
    return reverse(tmp, head);
}



// O(N) Time
// O(1) Space
function reverse(head) {
    let prev = null;
    let current = head;
    while (current != null) {
        let tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    return prev;
}