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
var numeroCartaMaquina = 0
var cartaJogador = 0
var cartaJogadorSelecionado = 0

function sortearCarta() {
    numeroCartaMaquina = 0
    cartaJogadorSelecionado = 0
    cartaJogador = 0

    numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaJogador = parseInt(Math.random() * 3)

    if (cartaJogador == numeroCartaMaquina) {
        cartaJogador = parseInt(Math.random() * 3)        
    } else {
        numeroCartaJogador = cartaJogador
    }
    console.log(cartaJogador)
}

function exibeCarta() {
    sortearCarta()
    for (var i = 0; i < cartas.length; i++) {
        if (numeroCartaJogador == i) {
            console.log(cartas[i])
            imagemPlayer.src = cartas[i].imagem
        }
    }
}

function btnReiniciar() {
    imagemPlayer.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/150px-Yugioh_Card_Back.jpg")';
}
function btnDecidir() {
    console.log("decidir")
}