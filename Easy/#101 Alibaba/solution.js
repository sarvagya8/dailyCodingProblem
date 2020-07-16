// O(N) Time
// O(1) Space
function primesum(n) {
    for (let i = 2; i < n; i += 1) {
        if (isPrime(i) && isPrime(n - i)) return i, n - i;
    }
}

function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i += 1) {
        if (n % i === 0) return false;
    }
    return n > 1;
}
primesum(8)