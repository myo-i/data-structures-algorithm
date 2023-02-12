"use strict";
function boom(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("BOOM!!!");
    }
}
boom([1, 2, 3, 4, 5]); // 上記の関数でメモリを消費しているのはiの宣言のみ → 空間複雑度はO(1)
function sayHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}
console.log(sayHiNTimes(6));
