const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) { 
    const length = array.length;
    for(let i=0; i<length; i++) {
        let temp = array[i];
        let min = i;
        for(let j=1+i; j<length; j++) {
            if(array[min] > array[j]) {
                min = j;
            }
        }
        
        array[i] = array[min];
        array[min] = temp;
    }
}

selectionSort(numbers);
console.log(numbers)