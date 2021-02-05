//comentario
/* mais
de
uma
linha
*/

function redireciona(){
    window.open("https://www.google.com.br");
    //window.location.href = "https://www.google.com.br";
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado";
    elemento.innerHTML = "Obrigado";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
}

function load(){
    //alert("Pagina carregada")
}

function change(elemento){
    console.log(elemento.value)
}

/*
var validar;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;

}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1,n2){
    return n1 + n2;
}

function replace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

var frase = prompt("Digite uma frase:");
var nome = prompt("Digite um nome:");
var novo_nome = prompt("Digite um novo nome:");
var f1 = frase.toLowerCase();
var nom1 = nome.toLowerCase();
var novo_nom1 = novo_nome.toLowerCase();
var n1 = prompt("Dê o valor de n1:");
var n2 = prompt("Dê o valor de n2:");
var num1 = parseFloat(n1);
var num2 = parseFloat(n2);
console.log(soma(num1,num2));
console.log(replace(f1,nom1,novo_nom1));
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for (count=1; count <=5; count++){
    alert(count);
}

*/

/*
var count = 0;

while (count <= 5){
    console.log(count);
//  count = count + 1;
//  alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");

//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"banana", cor:"amarelo"}, {nome:"uva", cor:"roxo"}];

console.log(frutas);
console.log(frutas[0].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelho"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("banana");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "))
//alert(lista[1]);
*/

/*
var nome = "Victor Fernandes";
var n1 = 29;
var n2 = 10;
var frase = "Brasil é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);

console.log(nome);
console.log(n1 + n2);
console.log(n1 * n2);
console.log(frase.replace("Brasil","Japão"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
//alert(frase.replace("Brasil","Japão"));
*/