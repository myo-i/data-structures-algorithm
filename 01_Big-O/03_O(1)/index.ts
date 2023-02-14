const boxes = [0,1,2,3,4,5]

function logTwoItems(boxes: number[]) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logTwoItems(boxes); // O(2)