var valoremDolar = 30
var cotacaoDolar = 5.32;
var nomePessoa = "Natalia"

var valorReal =   valoremDolar * cotacaoDolar

valorReal = valorReal.toFixed(2) // tofixed é usado para arredondar valor ( 2 ) colcamos entre parenteses o numero de casas que irá ser arredondado. é chamado de metodo.

alert (' Olá,  ' + nomePessoa  + '. O valor da sua compra é de:  R$ ' +  valorReal)