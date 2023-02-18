class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        // 実際のArrayでもデータのシフトが発生するので、O(n)などの計算量となる（指定するindexによる）
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i=index; i < this.length - 1; i++) {
            // 実際にはデータを左へシフトさせるのではなく、indexのデータを次のデータに書き換えてるだけ
            this.data[i] = this.data[i+1];
        }
        // 最後の次のデータはないので、最後のindexのデータは削除する必要がある
        delete this.data[this.length-1];
        this.length--;
    } 

}

const newArray = new MyArray();
newArray.push("Hello");
newArray.push("World");
newArray.push("!");
newArray.delete(1);
newArray.push("My");
newArray.push("name");
console.log(newArray);
