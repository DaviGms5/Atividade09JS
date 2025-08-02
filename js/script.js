const cores = [
    document.getElementById('cor1'),
    document.getElementById('cor2'),
    document.getElementById('cor3'),
    document.getElementById('cor4'),
    document.getElementById('cor5'),
    document.getElementById('cor6')
];
const encontrar = document.getElementById('encontre');

function comecarBotao() {
    alert("Jogo começou! Tente clicar na cor correta!");
    escutadoresDeEventos(); // Garante que os ouvintes sejam aplicados
    randomColor();
}

function escutadoresDeEventos() {
    cores.forEach(corDiv => {
        corDiv.onclick = () => {
            if (corDiv.style.backgroundColor === encontrar.style.backgroundColor) {
                alert("Acertou! Próxima cor...");
                randomColor();
            } else {
                alert("Cor errada! Você perdeu.");
            }
        };
    });
}

function randomColor() {
    const vermelho = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);

    const coresRGB = [
        `rgb(${vermelho}, ${azul}, ${verde})`,
        `rgb(${vermelho}, ${verde}, ${azul})`,
        `rgb(${verde}, ${azul}, ${vermelho})`,
        `rgb(${verde}, ${vermelho}, ${azul})`,
        `rgb(${azul}, ${vermelho}, ${verde})`,
        `rgb(${azul}, ${verde}, ${vermelho})`
    ];

    // Aplica as cores
    cores.forEach((div, i) => {
        div.style.backgroundColor = coresRGB[i];
    });

    // Sorteia a cor a ser adivinhada
    const corSorteada = coresRGB[Math.floor(Math.random() * coresRGB.length)];
    encontrar.style.backgroundColor = corSorteada;
}
