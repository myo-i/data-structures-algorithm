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
    breadthFirstSearchRecursive(queue, list) {
        
        // 1, いつ止めるのか、辞めることになるのかのベースケースを作る
        if(!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        // console.log(currentNode);
        list.push(currentNode.value);

        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchRecursive(queue, list);

    }
    //         9
    //     3       21
    //  1   7    15    170

    // BFS
    // -> [9, 3, 21, 1, 7, 15, 170]

    // DFS
    // InOrder - [1, 3, 7, 9, 15, 21, 170]
    // PreOrder - [9, 3, 1, 7, 21, 15, 170]
    // PostOrder - [1, 7, 15, 170, 3, 21, 9]
    DFSInOrder() {
        return traverseInOrder(this.root, [])
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }


    print() {
        console.log(this);
    }
}

function traverseInOrder(node, list) {
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if(node.left) {
        traversePreOrder(node.left, list);
    }
    if(node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if(node.left) {
        traversePostOrder(node.left, list);
    }
    if(node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
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
// console.log("-----------------------");
// console.log(myTree.breadthFirstSearch());
// console.log(myTree.breadthFirstSearchRecursive([myTree.root], []));
// console.log("-----------------------");

// DFS
console.log("-----------------------");
console.log(myTree.DFSInOrder());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
console.log("-----------------------");

//         9
//     3       21
//  1   7    15    170

// BFS
// -> [9, 3, 21, 1, 7, 15, 170]

// DFS
// InOrder - [1, 3, 7, 9, 15, 21, 170]
// PreOrder - [9, 3, 1, 7, 21, 15, 170]
// PostOrder - [1, 7, 15, 170, 3, 21, 9]


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
