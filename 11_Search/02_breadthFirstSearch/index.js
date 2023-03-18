class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    // Left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        // 再帰ではなく、for文やwhile文を駆使する
        // 状態を保持するための変数（rootにあたるノードの状態）を使ってrootにあたるノードを表現する
    }

    lookup(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(value < currentNode.value) 
                currentNode = currentNode.left;
            else if(value > currentNode.value) 
                currentNode = currentNode.right;
            else if(value === currentNode.value) 
                return true;
        }
        return false;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue= [];
        queue.push(currentNode);
        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) 
                queue.push(currentNode.left);

            if(currentNode.right) 
                queue.push(currentNode.right);
        }
        return list;
    }
    //         9
    //     3       21
    //  1   7    15    170
    // -> [9, 3, 21, 1, 7, 15, 170]



    print() {
        console.log(this);
    }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(3);
myTree.insert(7);
myTree.insert(21);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
myTree.insert(13);
myTree.insert(12);
myTree.insert(14);
myTree.print();
console.log(myTree.lookup(2));
console.log(myTree.lookup(170));
console.log(myTree.lookup(15));
console.log(myTree.lookup(17));
console.log(myTree.lookup(9));

// BFS
console.log("-----------------------");
console.log(myTree.breadthFirstSearch());
console.log("-----------------------");

// myTree.remove(15)
myTree.print();

// console.log(traverse(myTree));

//      9
//  3       21
//1   7  15    170

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}
