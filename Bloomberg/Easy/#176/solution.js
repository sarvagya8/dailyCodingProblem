// O(N) Time and Space
function mappingExists(s1, s2) {
    if (s1.length !== s2.length) return false;
    let mapping = {};
    for (let i = 0; i < s1.length; i += 1) {
        if (!mapping[s1[i]]) mapping[s1[i]] = s2[i];
        else if (mapping[s1[i]] !== s2[i]) return false;
    }
    return true;
}
