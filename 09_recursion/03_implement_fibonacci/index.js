function fibonacciRecursion(n) {
    if(n < 2) {
        return n
    }

    // フィボナッチ数列はインデックスNの値はN-1 + N-2という発想？
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)

}
// 5 4 

// 4 3
// 3 2  2 1
// 2 1 1 0 1 0 
// 1 0

function fibonacciIterative(n) {
    let pre1 = 0;
    let pre2 = 1;
    let ans = 0;
    
    if(n === 0) {
        return 0
    } else if(n === 1) {
        return 1
    }

    // n === 0の時は考慮していないので、n-1
    for(let i=0; i<n-1; i++) {
        ans = pre1 + pre2
        pre1 = pre2
        pre2 = ans
    }
    return ans
}

console.log(fibonacciRecursion(3))
console.log(fibonacciIterative(6))
