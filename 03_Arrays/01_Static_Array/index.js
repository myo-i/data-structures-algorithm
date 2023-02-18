"use strict";
let strings = ["a", "b", "c", "d"];
// For 32-bit systems, 4*4 = 16 bytes are occupied
// push
strings.push("e"); // O(1)
console.log(strings);
// pop
strings.pop(); // O(1)
strings.pop();
console.log(strings);
// unshift
strings.unshift("x"); // O(n)
// ["a", "b", "c", "d"]
//   0    1    2    3
//          ↓ 
// ["x", "a", "b", "c", "d"]
//   0    1    2    3    4
// 元あった配列の要素をシフトさせて空いた0に文字を入れるためO(n)となる
console.log(strings);
// splice
strings.splice(2, 0, "apple");
console.log(strings);
