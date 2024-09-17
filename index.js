const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Allana Marchesine";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 16;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " Minha idade é " + idade + " e sou nascida no ano " + anoNascimento);

let AnoAtual = 2025;
let Idade =18;
const NomeCompleto = "Allana Marchesine";
const Faculdade = "estetica";

console.log("Ola meu nome e " + NomeCompleto + ", tenho " + Idade + " anos " + "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na area de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto}`)

const ListaDeViagens = new Array(
  `Paris`,
  `Veneza`,
  `California`,
  `Cancun`,
  `Nova York`
)
console.log(ListaDeViagens);

console.log(ListaDeViagens[01]);

ListaDeViagens.push('Coronel Vivida');
console.log(ListaDeViagens);

ListaDeViagens.splice(1,1);
console.log(ListaDeViagens);

var  nomeComprador = entrada("Qual seu nome?");
var IdadeComprador = entrada("Qual e sua idade? ");

if(IdadeComprador < 18){
  console.log("infelizmente, voce e menor de idade e nao podemos vender a passagem")
}

if(IdadeComprador >= 18){
  console.log("Parabens sua compra foi realizada com sucesso")
}