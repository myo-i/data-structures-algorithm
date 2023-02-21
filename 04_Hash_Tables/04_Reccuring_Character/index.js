// [2,5,1,2,3,5,1,2,4] → 2
// [2,1,1,2,3,5,1,2,4] → 1

function aa(array) {
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }    
    }
    return "No Reccurring Character";
}


function searchRcccurringChar(array) {
    const map = new Map();
    for (let i=0; i<array.length; i++) {
        if (typeof map.get(array[i]) === "undefined") {
            map.set(array[i], null);
            // map[array[i]] = i;
        } else {
            return array[i]
        }
    }
    return "No Reccurring Character";
}
// O(n)
// O(n)

console.log(searchRcccurringChar([2,5,1,2,3,5,1,2,4]));
console.log(searchRcccurringChar([2,1,1,2,3,5,1,2,4]));
// console.log(aa([2,5,1,2,3,5,1,2,4]));
// console.log(aa([2,1,1,2,3,5,1,2,4]));
