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

    keys() {
        const keysArray = [];
        for (let i=0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
    printData() {
        console.log(this.data);
    }
}
    
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 2300);
myHashTable.set('oranges', 1600);
console.log(myHashTable.keys());
// myHashTable.printData();
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));

// デメリット
// データは順番に配置されていない
// 今回のkeysのケースでいえばデータは50個入るが、
// その中でランダムに3個しか入れていないにも関わらず、50回分ループを回さなければならない

    