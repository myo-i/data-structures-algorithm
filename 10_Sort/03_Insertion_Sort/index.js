const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for(let i=0; i<array.length; i++) {
        if(array[i] < array[0]) {
            // 詳しくは以下リンクの返り値を参照
            // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for(let j=0; j < i; j++) {
                if(array[j] < array[i] && array[i] < array[j+1]) {
                    array.splice(j+1, 0, array[i]);
                    array.splice(i+1, 1);
                }
            }

        }

    }
}

insertionSort(numbers);
console.log(numbers);
