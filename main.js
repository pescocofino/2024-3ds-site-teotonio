const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado'); 

const perguntas = [
    {
        enunciado: "Em um apocalipse zumbi, voçê mataria seu amigo para sobreviver.",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação01"
            },
            {
                texto: "Não",
                afirmacao: "afirmação02"
            }
        ]
    },
    {
        enunciado: "Voçê considera seus amigos mais proximos como parte da sua família",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação03"
            },
            {
                texto: "Não",
                afirmacao: "afirmação04"
            }
        ]
    },
    {
        enunciado: "Voçê confiaria em uma pessoa que te traiu uma vez?",
        alternativas: [
            {
                texto: "alternativa05",
                afirmacao: "afirmação03"
            },
            {
                texto: "alternativa06",
                afirmacao: "afirmação04"
            }
        ]
    },
    {
        enunciado: "Texto 4",
        alternativas: [
            {
                texto: "alternativa07",
                afirmacao: "afirmação03"
            },
            {
                texto: "alternativa08",
                afirmacao: "afirmação04"
            }
        ]
    },
    {
        enunciado: "Texto 5",
        alternativas: [
            {
                texto: "alternativa09",
                afirmacao: "afirmação03"
            },
            {
                texto: "alternativa10",
                afirmacao: "afirmação04"
            }
        ]
    },
    {
        enunciado: "Texto 6",
        alternativas: [
            {
                texto: "alternativa11", 
                afirmacao: "afirmação03"
            },
            {
                texto: "alternativa12", 
                afirmacao: "afirmação04"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", function() {
            respostaSelecionada(alternativa); 
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostreResultado() {
    caixaPerguntas.textContent = "Ok";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();