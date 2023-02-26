// add a method remove() to the linked list that deletes a node to the specified index.

class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: this.tail
      }
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = holdingPointer;
      holdingPointer.prev = newNode;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      unwantedNode.prev = leader;
      this.length--;
      return this.printList();
    }
    print() {
        console.log(this.head);
    }
  }
  
  let myDoublyLinkedList = new DoublyLinkedList(10);
  myDoublyLinkedList.append(5);
  myDoublyLinkedList.append(16);
  myDoublyLinkedList.prepend(1);
  myDoublyLinkedList.insert(2, 99);
  myDoublyLinkedList.insert(20, 88);
  myDoublyLinkedList.remove(2);
  myDoublyLinkedList.print();
