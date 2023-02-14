function printAllNumbersAndAllPairsSum(numbers: number[]) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) {
        console.log(number)
    });

    console.log("number pairs sum:");
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersAndAllPairsSum([1,2,3,4,5]); // O(n + n^2) → O(n^2)