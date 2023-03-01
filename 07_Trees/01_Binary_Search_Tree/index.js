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
            if(value < currentNode.value) currentNode = currentNode.left;
            else if(value > currentNode.value) currentNode = currentNode.right;
            else if(value === currentNode.value) return true;
        }
        return false;
    }
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
myTree.print();
console.log(myTree.lookup(2));
console.log(myTree.lookup(170));
console.log(myTree.lookup(15));
console.log(myTree.lookup(17));
console.log(myTree.lookup(9));
// console.log(traverse(myTree));

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}
