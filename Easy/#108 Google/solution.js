// O(N) Space
// O(N²) Time
function isShifted(a, b) {
    if (a.length !== b.length) return false;
    return (a + a).indexOf(b) !== -1;
}