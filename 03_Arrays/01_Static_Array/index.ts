let strings = ["a", "b", "c", "d"];
// For 32-bit systems, 4*4 = 16 bytes are occupied


strings[2] // O(1)


// push
strings.push("e"); // O(1)
console.log(strings);


// pop
strings.pop(); // O(1)
strings.pop();
console.log(strings); // ["a", "b", "c"]


// unshift
strings.unshift("x"); // O(n)!!!!!
// ["a", "b", "c", "d"]
//   0    1    2    3
//          ↓ 
// ["x", "a", "b", "c", "d"]
//   0    1    2    3    4
// 元あった配列の要素をシフトさせて空いた0に文字を入れるためO(n)となる
console.log(strings); // ["x", "a", "b", "c"]


// splice
strings.splice(2, 0, "apple"); 
// ["x", "a", "b", "c"]
//   0    1    2    3
//          ↓
// ["x", "a", "apple", "b", "c"]
//   0    1      2      3    4
// 指定の位置の文字を削除して値を代入するものだが、今回は削除していないのでn/2くらいの操作数になる
// このメソッドは指定位置によって操作数が変わるので、最悪の場合はO(n)、最良の場合はO(1)←spliceを使う意味はないけど




console.log(strings); // ["x", "a", "apple", "b", "c"]
