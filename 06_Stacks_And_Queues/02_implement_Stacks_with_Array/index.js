class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack { 
    constructor() {
        this.data = [];
    }

    // 一番上の要素を見る
    peek() {
        return this.data[this.data.length-1];
    }
    push(value) {
        this.data.push(value);
        return this;
    }
    pop() {
        this.data.pop();
        return this;
    }
    print() {
        console.log(this.data);
    }
}

const myStack = new Stack();

myStack.push(1);
console.log(myStack.peek());
myStack.push(10);
myStack.push(100);
myStack.push(1000);
myStack.print();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());


