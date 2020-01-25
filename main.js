const array = [1,3,4,5,8,9];

const newArray = array.map(function(item, index){
    return item + index;
})

console.log(newArray);

const sum = array.reduce(function(total, next){
    return total + next;
})

console.log(sum);

// filter precisa retornar um booleano
const filter = array.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);


// find (Se encontrar a condição, retorna o próprio número, se não, retorna undefined)
const find = array.find(function(item){
    return item === 4;
})

console.log(find);


