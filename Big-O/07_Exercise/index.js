"use strict";
const array = [{
        comment: "yes",
        date: 2020
    }, {
        comment: "no",
        date: 2021
    }, {
        comment: "yeah",
        date: 2022
    }];
// 日付順で取得するとどのくらいのBigOになるのか？
// それぞれの日付を比較するのでループのネストが発生する → O(n^2)
"asdfhgjklwerytuioqwe".length; // このBigOはどんな時でもO(1)
// 言語によって関数やメソッド、プロパティなどがどのように機能するのかによって上記の値は変わる
// 空間と時間
