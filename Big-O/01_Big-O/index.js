"use strict";
const cat = ["cat"];
const catInDog = ["dog", "dog", "dog", "dog", "cat", "dog", "dog", "dog", "dog", "dog",];
const large = new Array(100000).fill("cat");
function catchcat(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("cat")) {
            console.log("Catch CAT!");
        }
    }
    let t1 = performance.now();
    console.log("Call to Catch CAT took " + (t1 - t0) + "milliseconds");
}
catchcat(large);
