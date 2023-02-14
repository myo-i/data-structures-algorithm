// const array1 = ["a","b","c","x",];
// const array2 = ["z","y","x"];

// function containsCommomItem(array1: string[], array2: string[]) {
//     for (let arr1Index=0; arr1Index<array1.length; arr1Index++) {
//         for (let arr2Index=0; arr2Index<array2.length; arr2Index++) {
//             if(array1[arr1Index] === array2[arr2Index]) {
//                 return true
//             }
//         }
//     }
//     return  false;
// }
// O(a*b) Time Complexity
// O(1)   Space Complexity

// 最初の段階では総当たりなどでもいいので思いついたアルゴリズムを形にしてみる
// 今回の例でいえばforのネストにより、計算量がO(n^2)と非常に大きくなってしまう
// 重要なのはいかに優れたアルゴリズムを思いつくかではなく、技術の違いを理解して問題をどのように解決していくかということ
// 今回ではforのネストが発生して計算量が大きくなることが問題なのでforを分離することが課題解決の1つの方法となる


const array1 = ["a","b","c","x",];
const array2 = ["z","y","x"];

function containsCommomItem2(array1, array2) {
    let map = {};
    for (let arr1Index=0; arr1Index<array1.length; arr1Index++ ) {
        if(!map[array1[arr1Index]]) {
            const item = array1[arr1Index];
            map[item] = true; 
        }
    }// map = {a: true, b: true, c: true, x: true,}


    for(let arr2Index=0; arr2Index<array2.length; arr2Index++) {
        if(map[array2[arr2Index]]) {
            return true;
        }
    }
    return false;
} 
// O(a+b) Time Complexity
// O(a)   Space Complexity

// 最初の回答では計算量は多いが、メモリは節約している
// 次の回答では計算量は少ないが、メモリを消費している


// 言語について深い知識があるともっと効率的にコードを書くことができる
function containsCommomItem3(array1, array2) {
    return array1.some(item => array2.includes(item))
}