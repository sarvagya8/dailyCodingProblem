// O(N) Time and Space

function firstRecurring(s) {
    let seen = new Set();
    for (const char of s) {
        if (seen.has(char)) return char;
        else seen.add(char);
    }
    return null;
}
