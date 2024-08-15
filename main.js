const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.caixa-resultados');

const perguntas = [
    {
        enunciado: "Texto 1",
        alternativas: [
            {
                texto:"alternativa01",
                afirmacao: "afirmação01"
            },
            {
                texto:"alternativa02",
                afirmacao: "afirmação02"
                
            }
        ]
    },
    {
        enunciado: "Texto 2",
        alternativas: [
            {
                texto:"alternativa03",
                afirmacao: "afirmação03"
            },
            {
                texto:"alternativa04",
                afirmacao: "afirmação04"
                
            }
        ]
    },
    {
        enunciado: "Texto 3",
        alternativas: [
            {
                texto:"alternativa05",
                afirmacao: "afirmação03"
            },
            {
                texto:"alternativa06",
                afirmacao: "afirmação04"
                
            }
        ]
    },
    {
        enunciado: "Texto 4",
        alternativas: [
            {
                texto:"alternativa07",
                afirmacao: "afirmação03"
            },
            {
                texto:"alternativa08",
                afirmacao: "afirmação04"
                
            }
        ]
    },
    {
        enunciado: "Texto 5",
        alternativas: [
            {
                texto:"alternativa09",
                afirmacao: "afirmação03"
            },
            {
                texto:"alternativa10",
                afirmacao: "afirmação04"
                
            }
        ]
    },
]

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}