var cartas = [
    {
        nome: "Dragonpit Magician",
        imagem: "https://www.duelshop.com.br/8914/dragonpit-magician-pevo-en014-super-rare.jpg",
        atributos: {
            defesa: 2700,
            ataque: 900
        }
    },
    {
        nome: "Odd-Eyes Arc Pendulum Dragon",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dbopqe5-7a01dd11-507a-4691-9ac7-80fb4e703318.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kYm9wcWU1LTdhMDFkZDExLTUwN2EtNDY5MS05YWM3LTgwZmI0ZTcwMzMxOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9NwsE1ukKqqVlOF-qI1zh45oM3q27Juooz3SmIhZBGI",
        atributos: {
            defesa: 2000,
            ataque: 2700
        }
    },
    {
        nome: "Lula",
        imagem: "http://orig11.deviantart.net/cab5/f/2009/181/0/4/lula_card_by_alexxtm.jpg",
        atributos: {
            defesa: 2400,
            ataque: 3400
        }
    }
]
var imagemPlayer = document.getElementById('cartaPlayer')
var imagemMaquina = document.getElementById('cartaMaquina')
var numeroCartaMaquina = 0
var cartaJogadorSelecionado = 0
var imagemMaquina = document.getElementById('cartaMaquina')
var pontosMaquina = 0
var pontosPlayer = 0
var radioAtributo = document.getElementsByClassName("escolha")


function sortearCarta() {
    numeroCartaMaquina = 0
    numeroCartaJogador = 0
    imagemMaquina.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/150px-Yugioh_Card_Back.jpg";

    numeroCartaMaquina = parseInt(Math.random() * 3)
    numeroCartaJogador = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    if (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    } else {
        cartaJogador = cartas[numeroCartaJogador]
    }

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnDecidir').disabled = false
    document.getElementById('btnDecidir').style.backgroundColor = "rgb(206, 168, 85)"
    document.getElementById('btnSortear').style.backgroundColor = "gray"
}

function exibeCarta() {
    sortearCarta()
    if (numeroCartaMaquina == numeroCartaJogador) {
        sortearCarta()
    } else {
        for (var i = 0; i < cartas.length; i++) {
            if (numeroCartaJogador == i) {
                imagemPlayer.src = cartas[i].imagem
            }
        }
    }
}
function exibeCartaMaquina() {
    for (var i = 0; i < cartas.length; i++) {
        if (numeroCartaMaquina == i) {
            imagemMaquina.src = cartas[i].imagem
        }
    }
}


function reiniciar() {
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
}

function pegaAtributo() {
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function btnDecidir() {
    var atributoSelecionado = pegaAtributo()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        console.log("ganhou")
        pontosPlayer++
        document.getElementById('pPlayer').innerHTML = pontosPlayer
        exibeCartaMaquina()
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        console.log("perdeu")
        pontosMaquina++
        document.getElementById('pMaquina').innerHTML = pontosMaquina
        exibeCartaMaquina()
    }
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnDecidir').disabled = true
    document.getElementById('btnSortear').style.backgroundColor = "rgb(206, 168, 85)"
    document.getElementById('btnDecidir').style.backgroundColor = "gray"
    document.getElementById('ataquePlayer').checked = false;
    document.getElementById('defesaPlayer').checked = false;
}
