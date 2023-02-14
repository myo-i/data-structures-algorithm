const boxes3 = ["a", "b", "c", "d", "e"];

function logAllPairs(array: string[]) {
    for (let i=0;i<array.length;i++) {
        for (let j=0;j<array.length;j++) {
            console.log(array[i], array[j]);
        }    
    }
}

logAllPairs(boxes3); // O(n^2)