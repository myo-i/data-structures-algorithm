// 10-->4-->16

// let linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 4,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = {
            value: value,
            next: this.head
        }
        this.head = node;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // 自作
    // insert(index, value) {
    //     let thisNode;
    //     let currentNode = this.head;
    //     console.log(this.length);
    //     for (let i=0; i<this.length; i++) {
    //         console.log(i, currentNode);
    //         if (i === index) {
    //             let node = new Node(value);
    //             node.next = currentNode;
    //             thisNode.next = node;
    //             return thisNode;
    //         }
    //         thisNode = currentNode;
    //         currentNode = currentNode.next;
    //     }
    //     return this.head
    // }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        // 初めからindex-1までのnodeを取得
        const leader = this.traverseToIndex(index-1) 

        // 挿入するnodeの次のnodeを取得（leaderはindex-1までのnodeしか所有していないのでnextは何も指さないが、
        // ポインタとして形式上のアドレスを持つことはできる）
        const holdingPointer = leader.next

        leader.next = newNode;

        // 挿入するnodeのnextにindex以降のnodeを入れる
        newNode.next = holdingPointer;

        this.length++;
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        // indexの次のnodeを取得
        const holdingPointer = leader.next.next;
        leader.next = holdingPointer;
        this.length--;
        return leader;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(4);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 100);
myLinkedList.insert(2, 100);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());
// myLinkedList.insert(20, 77);
// console.log(myLinkedList.printList());

// console.log(myLinkedList);


