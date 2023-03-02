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

    // 削除対象の次に大きい数字が代わりに入っている
    remove(value) {
        let currentNode = this.root;
        // 対象を探し、対象のノードがあれば取得
        while(value !== currentNode.value) {
            if(value < currentNode.value) 
                currentNode = currentNode.left;
            else if(value > currentNode.value) 
                currentNode = currentNode.right;
            else if(!currentNode.left && !currentNode.right) {
                return "There is no target";
            }
        }
        // currentNodeには削除対象が入っている
        // currentNodeの次の要素がない場合はcurrentNode=削除対象
        if(!currentNode.right && !currentNode.left) {
            // 削除処理
            currentNode.value = null;
            return this;
        // currentNodeのleftがない場合はrightをそのままくっつける
        } else if(!currentNode.left) {
            currentNode.value = currentNode.right.value;
            currentNode.right = currentNode.right.value.right;
            return this;
        // currentNodeのrightがない場合はleftをそのままくっつける
        } else if(!currentNode.right) {
            currentNode.value = currentNode.left.value;
            currentNode.left = currentNode.left.value.left;
        // currentNodeにleft, rightどちらも存在する場合、valueの次に大きい値を削除対象の値と入れ替える
        // visualgoで試した感じだとそんなロジックっぽいから
        } else {
            let nextLargest = currentNode;
            // 削除対象の次に大きい値を探す
            // currentNode = currentNode.right;
            if(!nextLargest.right.left) {
                currentNode.value = nextLargest.right.value;
                currentNode.right = nextLargest.right.value.right;
                return this;
            }
            while(nextLargest.left) {
                nextLargest = nextLargest.left
            }
            currentNode.value = nextLargest.value;
        }
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
myTree.remove(21)
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
