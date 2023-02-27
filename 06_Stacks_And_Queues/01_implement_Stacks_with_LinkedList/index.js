class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack { 
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length= 0;
    }

    // 一番上の要素を見る
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    print() {
        console.log(this);
    }
}

const myStack = new Stack();

// Stackを見たい場合はprint()を使う
myStack.push(1);
myStack.print();
console.log(myStack.peek());
myStack.push(10);
// myStack.print();
myStack.push(100);
myStack.push(1000);
// myStack.print();
console.log(myStack.peek());
myStack.pop();
// myStack.print();


