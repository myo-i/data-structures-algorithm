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
    // 自作
    myRemove(value) {
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

    // remove(value) {
    //     if (!this.root) {
    //       return false;
    //     }
    //     let currentNode = this.root;
    //     let parentNode = null;
    //     while(currentNode){
    //       if(value < currentNode.value){
    //         parentNode = currentNode;
    //         currentNode = currentNode.left;
    //       } else if(value > currentNode.value){
    //         parentNode = currentNode;
    //         currentNode = currentNode.right;
    //       } else if (currentNode.value === value) {
    //         //We have a match, get to work!
            
    //         //Option 1: No right child: 
    //         if (currentNode.right === null) {
    //           if (parentNode === null) {
    //             this.root = currentNode.left;
    //           } else {
                
    //             // value === currentNode.valueの条件を通過後、
    //             // currentNodeが削除対象なので、削除対象の親のleft(right)に削除対象のleft(right)を入れれば
    //             // currentNodeを削除できる
    //             //if parent > current value, make current left child a child of parent
    //             if(currentNode.value < parentNode.value) {
    //               parentNode.left = currentNode.left;
                
    //             //if parent < current value, make left child a right child of parent
    //             } else if(currentNode.value > parentNode.value) {
    //               parentNode.right = currentNode.left;
    //             }
    //           }
            
    //         //Option 2: Right child which doesnt have a left child
    //         } else if (currentNode.right.left === null) {
    //           currentNode.right.left = currentNode.left;
    //           if(parentNode === null) {
    //             this.root = currentNode.right;
    //           } else {
                
    //             //if parent > current, make right child of the left the parent
    //             if(currentNode.value < parentNode.value) {
    //               parentNode.left = currentNode.right;
                
    //             //if parent < current, make right child a right child of the parent
    //             } else if (currentNode.value > parentNode.value) {
    //               parentNode.right = currentNode.right;
    //             }
    //           }
            
    //         //Option 3: Right child that has a left child
    //         } else {
    
    //           //find the Right child's left most child
    //           let leftmost = currentNode.right.left;
    //           let leftmostParent = currentNode.right;
    //           while(leftmost.left !== null) {
    //             leftmostParent = leftmost;
    //             leftmost = leftmost.left;
    //           }
              
    //           //Parent's left subtree is now leftmost's right subtree
    //           leftmostParent.left = leftmost.right;
    //           leftmost.left = currentNode.left;
    //           leftmost.right = currentNode.right;
    
    //           if(parentNode === null) {
    //             this.root = leftmost;
    //           } else {
    //             if(currentNode.value < parentNode.value) {
    //               parentNode.left = leftmost;
    //             } else if(currentNode.value > parentNode.value) {
    //               parentNode.right = leftmost;
    //             }
    //           }
    //         }
    //       return true;
    //       }
    //     }
    // }

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
myTree.remove(15)
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
