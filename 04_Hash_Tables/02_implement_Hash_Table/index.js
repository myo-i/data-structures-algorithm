// class HashTable {
//     constructor (size) {
//         this.data = new Array(size);
//     }
    
//     // _でプライベートプロパティ
//     _hash(key) {
//       let hash = 0;
//       for (let i=0; i<key.length; i++) {
//         hash = (hash + key.charCodeAt(i) * i) %
//         this.data.length
//       }
//       return hash;
//     }

//     set(key, value) {
//         const hashed = this._hash(key);
//         this.data[hashed -1 ] = value;
//     }

//     get(key) {
//         const hashed = this._hash(key);
//         return this.data[hashed - 1];
//     }
//     printData() {
//         console.log(this.data);
//     }
// }
    
// const myHashTable = new HashTable(50);
// console.log(myHashTable._hash("grapes"));
// myHashTable.set('grapes', 10000);
// console.log(myHashTable.get('grapes'));



class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }
    
    // _でプライベートプロパティ
    _hash(key) {
      let hash = 0;
      for (let i=0; i<key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
      }
      return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        if (bucket) {
            if (bucket[0][0] === key) {
                return bucket[0][1];
            }
        }
        return undefined;
    }
    printData() {
        console.log(this.data);
    }
}
    
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 2300);
myHashTable.printData();
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

    