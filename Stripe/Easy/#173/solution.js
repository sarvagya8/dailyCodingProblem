// O(N) Time and Space
function flatten(obj) {
    let newObj = {};
    let name = '';
    function flat(o) {
        for (const key in o) {
            if (o[key] === Object(o[key])) {
                if (name) name += '.' + key;
                else name = key;
                return flat(o[key]);
            } else {
                if (name) newObj[name + '.' + key] = o[key];
                else newObj[key] = o[key];
            }
        }
    }
    flat(obj);
    return newObj;
}
