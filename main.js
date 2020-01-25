// const array = [1,3,4,5,8,9];

// const newArray = array.map(function(item, index){
//     return item + index;
// })

// console.log(newArray);

// const sum = array.reduce(function(total, next){
//     return total + next;
// })

// console.log(sum);

// // filter precisa retornar um booleano
// const filter = array.filter(function(item){
//     return item % 2 === 0;
// })

// console.log(filter);


// // find (Se encontrar a condição, retorna o próprio número, se não, retorna undefined)
// const find = array.find(function(item){
//     return item === 4;
// })

// console.log(find);

// ==============================================================ARROW FUNCTIONS==========================================================================================

// const array = [1,2,3,4,5,6,7];

// // // sem arrow function
// // const newArray = array.map(function(item){
// //     return item * 2;
// // })

// // // com arrow function
// // const newArray = array.map((item) => {
// //     return item * 2;
// // })

// // com arrow function melhorando sintaxe
// const newArray = array.map(item => item * 2);
// console.log(newArray);

// // criando function utilizando variáveis
// const teste = () => {
//     1,2,3;
// }

// console.log(teste());

// // arrow function retornando um objeto
// const teste = () => ({ name: "Matheus", idade: 28});

// console.log(teste());

// ==============================================================VALORES PADRÃO==========================================================================================

// // definindo valor padrão nos parâmetros da function
// function soma(a = 3 , b = 6){
//     return a+b;
// }

// console.log(soma(1));
// console.log(soma());


// // definindo valor padrão em arrow functions
// const soma = (a = 3, b = 6) => a+b;

// console.log(soma(1));
// console.log(soma());


// ==============================================================DESESTRUTURAÇÃO DE OBJETOS================================================================================

// // COM ESTRUTURAÇÃO DE OBJETOS
// const usuarios = {

//     nome: "Matheus",
//     idade: 28,
//     sexo: "Masculino",
//     endereco: {
//         cidade: "Sorocaba",
//         estado: "São Paulo"
//     }
// }

// var nome = usuarios.nome;
// var idade = usuairos.idade;
// var endereco = usuarios.endereco.cidade;

// // SEM ESTRUTURAÇÃO DE OBJETOS
// const usuarios = {

//     nome: "Matheus",
//     idade: 28,
//     sexo: "Masculino",
//     endereco: {
//         cidade: "Sorocaba",
//         estado: "São Paulo"
//     }
// }

// const{ nome, idade, endereco: { cidade}} = usuarios;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// SEM ESTRUTURAÇÃO DE OBJETOS PARA FUNCTIONS
const usuarios = {

    nome: "Matheus",
    idade: 28,
    sexo: "Masculino",
    endereco: {
        cidade: "Sorocaba",
        estado: "São Paulo"
    }
}

function mostraUsuario({ nome, idade, endereco: cidade }){
    console.log(nome, idade, cidade);
}

mostraUsuario(usuarios);









