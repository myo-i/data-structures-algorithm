"use strict";
const cat2 = ["cat"];
const catInDog2 = ["dog", "dog", "dog", "dog", "cat", "dog", "dog", "dog", "dog", "dog",];
const large2 = new Array(10000).fill("cat");
function catchcat2(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("cat")) {
            console.log("Catch CAT!");
        }
    }
    console.log("Liner");
}
catchcat2(large2); // O(n) --> Linear Time
