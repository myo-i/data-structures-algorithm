// indexとsplitedInput.length-indexを入れ替える
function reverseString(inputString) {
    splitedInput = inputString.split("");
    // console.log(splitedInput[0]);
    opposeIndex = splitedInput.length-1
    for (let i=0; i<opposeIndex/2; i++) {
        leftSide = splitedInput[i];
        rightSide = splitedInput[opposeIndex-i];
        splitedInput[i] = rightSide;
        splitedInput[opposeIndex-i] = leftSide;
    }
    return splitedInput.join("");
}
// Time Complexity O(n/2)
// Space Complexity O(n+2)
console.log(reverseString("Hi My name is Andrei"));


function reverse(str) {
    // 入力チェック
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Invalid Input";
    }

    const backwords = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >=0; i--) {
        backwords.push(str[i]);
    }

    // 文字列の結合
    return backwords.join('');
}
console.log(reverse("Hi My name is Andrei"));


// use reverse function 
function reverse2(str) {
    return str.split("").reverse().join("");
}
console.log(reverse2("Hi My name is Andrei"));


// user ES6
// const reverse3 = str => str.split("").reverse().join("");
const reverse3 = str => [...str].reverse().join("");
console.log(reverse3("Hi My name is Andrei"))

// 大切なのはどの方法を用いるかではなく、どのように問題を解決するか。
// どのように問題を解決したいかを伝え、それぞれの方法の長所と短所を理解することが大切