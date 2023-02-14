const cat3 = ["cat"]
const catInDog3 = ["dog","dog","dog","dog","cat","dog","dog","dog","dog","dog",]
const large3 = new Array(10000).fill("cat")
function catchcat1(array: string[]) {
    let t0 = performance.now();
    for (let i=0;i<array.length; i++) {
        if(array[i].includes("cat")) {
            console.log("Catch CAT!");
        }
    }
    let t1 = performance.now();
    console.log("Call to Catch CAT took "+(t1-t0)+"milliseconds");
}

console.log(catchcat1(catInDog3));

const catchcat3 = (array: string[]) => {
    array.forEach(element => {
        if (element === "cat") {
            console.log("Catch CAT!");
        }
    });
}

const catchcat4 = (array: string[]) => {
    for(let element of array) {
        if (element === "cat") {
            console.log("Catch CAT!");
        }
    };
}

console.log(catchcat3(catInDog3));
console.log(catchcat4(catInDog3));