// O(N) Time
class Log {
    constructor(n) {
        this.n = n;
        this.arr = [];
    }

    record(orderId) {
        if (this.arr.length >= this.n) this.arr.shift;
        this.arr.push(orderId);
    }

    getLast(i) {
        console.log(this.arr[this.arr.length - i]);
        return this.arr[this.arr.length - i];
    }
}


// O(1) Constant Time
class Log {
    constructor(n) {
        this.n = n;
        this.arr = [];
        this.cur = 0;
    }

    record(orderId) {
        this.arr[this.cur] = orderId;
        this.cur = (this.cur + 1) % this.n;
    }

    getLast(i) {
        return this.arr[(this.cur - i + this.n) % this.n];
    }
}