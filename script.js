var json1 = `
{
    "id": 1,
    "nome": "Cavalinho do Fluminense",
    "categoria": "Boneco",
    "serie": "Cavalinho do Fantástico",
    "preco": "R$150,00",
    "imagem": "<img src='img/cavalinhodofluminense.jfif' width='200px'>",
    "link": "https://ge.globo.com/futebol/times/fluminense/",

    "id2": 2,
    "nome2": "Cavalinho do Vasco",
    "categoria2": "Boneco",
    "serie2": "Cavalinhos do Fantástico",
    "preco2": "R$150,00",
    "imagem2": "<img src='img/cavalinhodovasco.jfif' width='200px'>",
    "link2": "https://vasco.com.br/",

    "id3": 3,
    "nome3": "Cavalinho do Cruzeiro",
    "categoria3": "Boneco",
    "serie3": "Cavalinhos do Fantástico",
    "preco3": "R$150,00",
    "imagem3": "<img src='img/cavalinhodocruzeiro.jpg' width='200px'>",
    "link3": "https://www.cruzeiro.com.br",

    "id4": 4,
    "nome4": "Cavalinho do Atlético Mineiro",
    "categoria4": "Boneco",
    "serie4": "Cavalinhos do Fantástico",
    "preco4": "R$150,00",
    "imagem4": "<img src='img/cavalinhomineiro.jpg' width='200px'>",
    "link4": "https://atletico.com.br/"
    
}
`;

var dados1 = JSON.parse(json1);


var link1 = `<a href="${dados1.link}" target="_blank">Visite nosso site</a>`;
var link2 = `<a href="${dados1.link2}" target="_blank">Visite nosso site</a>`;
var link3 = `<a href="${dados1.link3}" target="_blank">Visite nosso site</a>`;
var link4 = `<a href="${dados1.link4}" target="_blank">Visite nosso site</a>`;


function valor() {
    var identificador = Number(document.getElementById('valorDigitado').value);
    if(identificador == dados1.id) {
        document.getElementById('nome').innerHTML = dados1.nome
        document.getElementById('categoria').innerHTML = dados1.categoria
        document.getElementById('serie').innerHTML = dados1.serie
        document.getElementById('preco').innerHTML = dados1.preco
        document.getElementById('imagem').innerHTML = dados1.imagem
        document.getElementById('link').innerHTML = link1
        document.getElementById('erro').innerHTML = ""

        } else if(identificador == dados1.id2) {
        document.getElementById('nome').innerHTML = dados1.nome2;
        document.getElementById('categoria').innerHTML = dados1.categoria2;
        document.getElementById('serie').innerHTML = dados1.serie2;
        document.getElementById('preco').innerHTML = dados1.preco2;
        document.getElementById('imagem').innerHTML = dados1.imagem2;
        document.getElementById('link').innerHTML = link2;

    } else if(identificador == dados1.id3) {
        document.getElementById('nome').innerHTML = dados1.nome3;
        document.getElementById('categoria').innerHTML = dados1.categoria3;
        document.getElementById('serie').innerHTML = dados1.serie3;
        document.getElementById('preco').innerHTML = dados1.preco3;
        document.getElementById('imagem').innerHTML = dados1.imagem3;
        document.getElementById('link').innerHTML = link3;
    
    }else if(identificador == dados1.id4) {
        document.getElementById('nome').innerHTML = dados1.nome4;
        document.getElementById('categoria').innerHTML = dados1.categoria4;
        document.getElementById('serie').innerHTML = dados1.serie4;
        document.getElementById('preco').innerHTML = dados1.preco4;
        document.getElementById('imagem').innerHTML = dados1.imagem4;
        document.getElementById('link').innerHTML = link4;
        document.getElementById('erro').innerHTML = "";
    } else{
        document.getElementById('erro').innerHTML = "Registro Inválido"
    }
    
}
