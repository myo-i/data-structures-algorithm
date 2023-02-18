function mergeSortedArrays(array1, array2) {
    // 入力チェック
    if(array1.length === 0) {
        return array2;
    } else if(array2.length === 0) {
        return array1;
    }
    // sortは数値のソートをする場合は注意が必要
    // sortは内部で文字列に変換を行ってからソートを行うため数値は大きさ順にソートできない場合がある
    // 数字をソートする方法は公式ドキュメントに記載されている
    // 参考記事 https://qiita.com/ndj/items/689e3eec398fc3c564fe
    return array1.concat(array2).sort((a, b) => {
        return a - b;
    });
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
console.log(mergeSortedArrays([0,3,4,31], []));
