const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado'); 

const perguntas = [
    {
        enunciado: "Voçê está em um apocalipse zumbi, você e seu amigo estão em uma situação onde só um dos dois pode sobreviver. Mataria seu amigo para sobreviver?",
        alternativas: [
            {
                texto: "Sim, pois e o unico jeito de garantir a minha sobrevivência.",
                afirmacao: "Seu amigo e morto e voçê escapa sozinho."
            },
            {
                texto: "Não, acredito que a outra maneira de sair dessa situação.",
                afirmacao: "No final das contas você e seu amigo conseguem escapar juntos."
            }
        ]
    },
    {
        enunciado: "Você volta ao seu refugio para recuperar suas forças e encontra sobreviventes pedindo ajuda. Ira ajudá-los e leva-los ao seu refugio?",
        alternativas: [
            {
                texto: "Sim, quanto mais pessoas melhor.",
                afirmacao: "Enquanto caminham até o refugio os sobreviventes o atacam e roubam seus recursos."
            },
            {
                texto: "Não, muito arriscado confiar em outros.",
                afirmacao: "Você vai embora e abandona os sobreviventes."
            }
        ]
    },
    {
        enunciado: "Você encontra um acampamento abandonado e completamente destruido.",
        alternativas: [
            {
                texto: "Explorar o acampamento em busca de recursos.",
                afirmacao: "Ao explorar o acampamento, acaba encontra garrafas de água potável."
            },
            {
                texto: "Deixar pra lá.",
                afirmacao: "Neste dia você acaba não encontrando mais nenhum recurso."
            }
        ]
    },
    {
        enunciado: "Na cidade, há um grande armazém abandonado mas, que está trancado. Tentar outra meio?",
        alternativas: [
            {
                texto: "Procurar outra entrada.",
                afirmacao: "Você consegue entrar no armazém por um buraco no telhado mas vê que ja está saqueado."
            },
            {
                texto: "Ir embora e não vasculhar o armazém.",
                afirmacao: "Você vai embora sem nada nesta noite."
            }
        ]
    },
    {
        enunciado: "Perto de um campo militar há diversos recursos valiosos mas, com grande risco.",
        alternativas: [
            {
                texto: "Arriscar e entrar no campo em busca de maiores recompensas.",
                afirmacao: "Infelizmente, você não foi o unico a pensar nisso um grupo de saqueadores acaba e o encontrando e te matam."
            },
            {
                texto: "Manter sua segurança e continuar com poucos recursos",
                afirmacao: "Mesmo com fome e sede você continua persistente pois amanha e um novo dia."
            }
        ]
    },
    
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