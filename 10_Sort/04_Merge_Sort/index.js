const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let left = array.splice(0, Math.ceil(array.length/2));
  let right = array;
  

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let array = [];
  while(left.length != 0 && right.length != 0) {
    if(left[0] <= right[0]) {
      array.push(left[0]);
      left.shift();
    } else {
      array.push(right[0]);
      right.shift();
    }
  }
  if(left.length === 0) {
      return array.concat(right);
  } else if(right.length === 0) {
      return array.concat(left);
  }
}


const answer = mergeSort(numbers);
console.log(answer);

// console.log(merge([1,2,5,6,44,99],[0,4,63,87,283]));
