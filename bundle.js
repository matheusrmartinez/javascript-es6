"use strict";

var array = [1, 3, 4, 5, 8, 9];
var newArray = array.map(function (item, index) {
  return item + index;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // filter precisa retornar um booleano

var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // find (Se encontrar a condição, retorna o próprio número, se não, retorna undefined)

var find = array.find(function (item) {
  return item === 4;
});
console.log(find);
