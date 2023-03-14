
function factorialRecursion(number) {
    if(number === 1) {
        return number;
    }
    return number * factorialRecursion(number-1);
}
// O(n)


function factorialIterative(number) {
    let sum = 1;
    for(let i=number; i>=1 ;i--) {
        sum *= i;
    }
    return sum
}
// O(n)


// *1は意味がないので、2の時に処理を止めてると良い

console.log(factorialRecursion(12));
console.log(factorialIterative(12));
