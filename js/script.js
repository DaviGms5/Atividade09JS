let pontuacao;
let tempo;
let intervaloTempo;
let ranking = [{ nome: "Jogador VIP", pontuacao: 3000 }, 
  { nome: "Perdedor", pontuacao: 0 }];
let nome;
const cores = 
[
    document.getElementById('cor1'),
    document.getElementById('cor2'),
    document.getElementById('cor3'),
    document.getElementById('cor4'),
    document.getElementById('cor5'),
    document.getElementById('cor6')
];
const encontrar = document.getElementById('encontre');

function comecarBotao() 
{
    nome = prompt("Digite seu nome: ");
    document.getElementById("botao").disabled = true;
    document.getElementById("botaoRanking").disabled = true;
    pontuacao =0;
    tempo = 15;
    alert(`"Atenção ${nome}, o jogo começou! Tente clicar nas cores corretas!"`);
    iniciarTemporizador();
    escutadoresDeEventos(); 
    randomColor();
    atualizarPontos();
}

function escutadoresDeEventos() 
{
    cores.forEach(corDiv => 
    {
        corDiv.onclick = () => 
        {
            if (corDiv.style.backgroundColor === encontrar.style.backgroundColor) 
            {
                pontuacao+=50;
                atualizarPontos();
                randomColor();  
            } 
            
            else 
            {
                pontuacao-=25;
                if (pontuacao < 0)
                {
                    pontuacao = 0;
                }
                atualizarPontos();
                randomColor();
            }
        };
    });
}

function randomColor() 
{
    const vermelho = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);

    const coresRGB = 
    [
        `rgb(${vermelho}, ${azul}, ${verde})`,
        `rgb(${vermelho}, ${verde}, ${azul})`,
        `rgb(${verde}, ${azul}, ${vermelho})`,
        `rgb(${verde}, ${vermelho}, ${azul})`,
        `rgb(${azul}, ${vermelho}, ${verde})`,
        `rgb(${azul}, ${verde}, ${vermelho})`
    ];

    // Aplica as cores
    cores.forEach((div, i) => 
    {
        div.style.backgroundColor = coresRGB[i];
    });

    // Sorteia a cor a ser adivinhada
    const corSorteada = coresRGB[Math.floor(Math.random() * coresRGB.length)];
    encontrar.style.backgroundColor = corSorteada;
}

function atualizarPontos() 
{
    document.getElementById("pontos").textContent = ` ${pontuacao}`;
}

function iniciarTemporizador() 
{
    tempo = 15;

    intervaloTempo = setInterval(() => 
    {
        tempo--;

        // (Opcional) Exibir tempo na tela, se quiser
        document.getElementById("tempo").textContent = ` ${tempo}s`;

        if (tempo <= 0) 
        {
            clearInterval(intervaloTempo); // Para o tempo
            desabilitarCliques(); // Impede que o jogador continue jogando
            alert(`Tempo esgotado ${nome}! Sua pontuação: ${pontuacao}`);
            ranking.push({ nome: nome, pontuacao: pontuacao });
            document.getElementById("botao").disabled = false;
            document.getElementById("botaoRanking").disabled = false;
            ranking.sort((a, b) => {
            if (a.nome === "Perdedor") 
            {
                return 1;     
            }

            if (b.nome === "Perdedor") 
            {
                return -1;    
            }

            return b.pontuacao - a.pontuacao;
            });     
        }
    }, 1000); // Executa a cada 1 segundo
}

function desabilitarCliques() 
{
    cores.forEach(corDiv => 
    {
        corDiv.onclick = null;
    });
}


function mostrarRanking() 
{
    let mensagem = " Ranking Top 5 Jogadores:\n\n";

    if (ranking.length === 0)
    {
        alert("O placar está vazio!!");
        return;
    }

    ranking.slice(0, 5).forEach((jogador, index) => 
    {
        mensagem += `${index + 1}. ${jogador.nome} - ${jogador.pontuacao} pts\n`;
    });

    alert(mensagem);
}