"use strict"

var atributoSelecionado
var atributoNaoSelecionado
var imagemPlayer = document.getElementById('cartaPlayer')
var imagemMaquina = document.getElementById('cartaMaquina')
var pontosMaquina = 0
var pontosPlayer = 0
var numRandom
var radioAtributo = document.getElementsByClassName("escolha")
let listaDeCards = {};
let cartaMaquina 
let cartaJogador

getAllCards()

async function getAllCards() {
    await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?atk=gt&def=gt")
    //converte respose para object
        .then((response) => response.json())
        //coloca os valores de id dos elementos em yugidata
        .then((yugioh) => {
            listaDeCards = yugioh.data.map((el) => {
                return {
                    id: el.id,
                    imagem: el.card_images[0].image_url,
                    ataque: el.atk,
                    defesa: el.def
                }
            });
        })
        .catch(() => {
            console.log("Deu ruim!");
        });
}

function sortearCarta() {
    imagemMaquina.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/150px-Yugioh_Card_Back.jpg";
    document.getElementById('result').innerHTML = ""
    //pega um index random da lista de cards
    numRandom = parseInt(Math.random() * listaDeCards.length)
    cartaJogador = listaDeCards[numRandom]
    listaDeCards.splice(numRandom, 1)
    numRandom = parseInt(Math.random() * listaDeCards.length)
    cartaMaquina = listaDeCards[numRandom]
    listaDeCards.splice(numRandom, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnDecidir').disabled = false
    document.getElementById('btnDecidir').style.backgroundColor = "rgb(206, 168, 85)"
    document.getElementById('btnSortear').style.backgroundColor = "gray"
    imagemPlayer.src = cartaJogador.imagem
}


function reiniciar() {
    getAllCards()
    imagemPlayer.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/150px-Yugioh_Card_Back.jpg";
    imagemMaquina.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/150px-Yugioh_Card_Back.jpg";
    pontosMaquina = 0
    pontosPlayer = 0
    document.getElementById('pMaquina').innerHTML = pontosMaquina
    document.getElementById('pPlayer').innerHTML = pontosPlayer
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnDecidir').disabled = true
    document.getElementById('btnSortear').style.backgroundColor = "rgb(206, 168, 85)"
    document.getElementById('btnDecidir').style.backgroundColor = "gray"
    document.getElementById('result').innerHTML = ""
}

function pegaAtributo() {
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            atributoSelecionado = radioAtributo[i].value
        }
        if(!radioAtributo[i].checked){
            atributoNaoSelecionado = radioAtributo[i].value
        }
    }
}

function btnDecidir() {
    pegaAtributo()
    imagemMaquina.src = cartaMaquina.imagem
    if (cartaJogador[atributoSelecionado] > cartaMaquina[atributoNaoSelecionado]) {
        pontosPlayer++
        document.getElementById('pPlayer').innerHTML = pontosPlayer
        document.getElementById('result').innerHTML = "Vitória"
    } else if (cartaJogador[atributoSelecionado] < cartaMaquina[atributoNaoSelecionado]) {
        pontosMaquina++
        document.getElementById('pMaquina').innerHTML = pontosMaquina
        document.getElementById('result').innerHTML = "Derrota"
    }else{
        document.getElementById('result').innerHTML = "Empate"
    }
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnDecidir').disabled = true
    document.getElementById('btnSortear').style.backgroundColor = "rgb(206, 168, 85)"
    document.getElementById('btnDecidir').style.backgroundColor = "gray"
    document.getElementById('ataquePlayer').checked = false;
    document.getElementById('defesaPlayer').checked = false;
    
    if(pontosPlayer == 3 && pontosPlayer > pontosMaquina){
        document.getElementById('result').innerHTML = "Você ganhou"
    }else if(pontosMaquina = 3 && pontosMaquina>pontosPlayer){
        document.getElementById('result').innerHTML = "O bot ganhou"
    }   
}
