

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/marciolanzarini/aula-javascript-dio"); //abrir em outra janela
    //window.location.href = "https://github.com/marciolanzarini/aula-javascript-dio";
    // abrir na mesma janela

}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
   elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade?")
console.log(validaIdade(idade));
*/


//alert(soma(4,10));//


/*var d = new Date();
alert (d.getMinutes());
*/

/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count=1; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <5){
    console.log(count);
    count = count +1;
}
*/

/*
var idade = prompt("Qual sua Idade?");
if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "Marcio Lanzarini";
//var idade = 40;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " Anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

