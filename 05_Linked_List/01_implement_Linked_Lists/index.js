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




class LinkedList {
    constructor(value) {
        this.head = {
            value: value, 
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        const node = {
            value: value,
            next: null
        }
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

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(4);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);


