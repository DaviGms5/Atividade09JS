const color1 = document.getElementById('cor1');
const color2 = document.getElementById('cor2');
const color3 = document.getElementById('cor3');
const color4 = document.getElementById('cor4');
const color5 = document.getElementById('cor5');
const color6 = document.getElementById('cor6');
const encontrar = document.getElementById('encontre');

function escutadoresDeEventos()
{
    color1.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color1.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })

    color2.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color2.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })

    color3.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color3.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })

    color4.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color4.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })

    color5.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color5.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })

    color6.addEventListener("click", function()
    {

        if(encontrar.style.backgroundColor == color6.style.backgroundColor)
        {
            randomColor();
        }

        else
        {
            alert("Cor escolhida foi a errada!! Você perdeu.");
        }
    })
}

function comecarBotao()
{
    alert("Jogo começou! Tente clicar no máximo de cores certas o mais rápido possível!");
    randomColor(); 
    escutadoresDeEventos();
}

function randomColor()
{
    let vermelho = Math.floor(Math.random()*255);
    let verde = Math.floor(Math.random()*255);
    let azul = Math.floor(Math.random()*255);

    let primeiraCor = color1.style.backgroundColor = `rgb(${vermelho}, ${azul}, ${verde})`
    let segundaCor = color2.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${blue})`
    let terceiraCor = color3.style.backgroundColor = `rgb(${verde}, ${azul}, ${vermelho})`
    let quartaCor = color4.style.backgroundColor = `rgb(${verde}, ${vermelho}, ${azul})`
    let quintaCor = color5.style.backgroundColor = `rgb(${azul}, ${vermelho}, ${verde})`
    let sextaCor = color6.style.backgroundColor = `rgb(${azul}, ${verde}, ${vermelho})`
    
    let conjuntoCores = [primeiraCor, segundaCor, terceiraCor, quartaCor, quintaCor, sextaCor];
    conjuntoCores.sort(function(a,b){return 0.5 - Math.random()})
    encontrar.style.backgroundColor = conjuntoCores[0]; 
}

