/* Write a function `fib(n)` that takes in a number as an argument.
The function should return  the n-th number of the Fibonnaci Sequence.

The 1st and 2nd number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.*/

// O(2^n) then fib(50) ≃ 2^(50) steps
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

//memoizaton 
//  js object, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

let foo = fib(50)

console.time('process')
console.timeLog('process', fib(50))
