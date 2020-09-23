// O(M * N) Time
// O(1) Space
class Iterator {
    constructor(arr) {
        this.arr = arr;
        this.out = arr.length;
        this.i = 0;
        this.j = -1;
    }
    
    nextCoords(a, b) {
        for (; a < this.out; a += 1) {
            for (; b < this.arr[a].length; b += 1) {
                if (this.arr[a][b]) return [a, b];
            }
            b = 0;
        }
        return null;
    }
    
    next() {
        let next = this.nextCoords(this.i, this.j + 1);
        if (next) {
            this.i = next[0];
            this.j = next[1];
            return this.arr[this.i][this.j];
        }
        if (!next) throw 'No more elements';
    }

    hasNext() {
        let next = this.nextCoords(this.i, this.j + 1);
        return next ? true : false;
    }
}
