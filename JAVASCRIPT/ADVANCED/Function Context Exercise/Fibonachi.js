function getFibonator() {
    let currentNum = 0
    let nextNum = 1;

    function fib() {
        let fibNum = currentNum + nextNum;
        currentNum = nextNum;
        nextNum = fibNum

        return currentNum
    }
    return fib;
}

function solve() {
    let fib = getFibonator()
    console.log(fib()); // 1
    console.log(fib()); // 1
    console.log(fib()); // 2
    console.log(fib()); // 3
    console.log(fib()); // 5
    console.log(fib()); // 8
    console.log(fib()); // 13
}
solve();