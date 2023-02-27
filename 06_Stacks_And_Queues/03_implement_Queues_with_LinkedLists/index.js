class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.last === this.first) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    print() {
        console.log(this)
    }
}

// Queueを見たい場合はprint()を使う
const myQueue = new Queue();
myQueue.enqueue(1);
// console.log(myQueue.peek());
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());

