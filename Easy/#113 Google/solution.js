// O(N) Time
// O(1) Space
function reverseWords(str) {
    // Helper function to reverse string in place
    function reverse(l, s, e) {
        while (s < e) {
            [l[s], l[e]] = [l[e], l[s]];
            s += 1;
            e -= 1;
        }
    }

    reverse(str, 0, str.length - 1); // Reverse the entire string

    // Reverse each word in the string
    let start = 0;
    for (let end = 0; end < str.length; end += 1) {
        if (char === ' ') {
            reverse(str, start, end - 1);
            start = end + 1;
        }
    }

    reverse(str, start, str.length - 1); // Reverse the last word

    return str;
}
