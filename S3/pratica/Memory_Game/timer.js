/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

// Coletando meus elementos
var header = document.querySelector('header');
var section = document.querySelector('section');
var body = document.querySelector('body');
var btStart = document.querySelector('#start');

// Função pra configurar e decrementar o tempo
const contarTempo = (duracao, display) => {
    var timer = duracao, minutos, segundos;

    function contador(){
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;
        // return console.log(minutos + ":" + segundos);

        --timer;

        // Se timer estiver nos 10 segundo finais
        if(timer < 10 && timer >= 0){
            display.style.color = 'red';
            display.style.fontWeight = '600';
        }
        // Se timer acabar
        else if( timer < 0){

            header.style.display = 'none';
            section.style.display = 'none';

            h1 = '<h1 id="lost">TEMPO ESGOTADO!! VOCÊ PERDEU!!</h1>'

            body.innerHTML = h1;
            
            setTimeout(()=>{
                self.location = 'index.html';
            }, 2500)
            
        } 
    }

    setInterval(contador,1000);
}


 // Função de mensagem incial para começar jogo
 const changeTextButton = () => {

    btStart.textContent = 'ENCONTRE OS PARES!!!';
    btStart.classList.add('encontre');
    return;
}

// Função para retornar a tela inicial depois da mensagem acima
function retonar() {
    h1 = document.getElementById('win');
    h1.style.display = 'none';

    body.insertBefore(header, body.children[0]);
    body.insertBefore(section, body.children[1]);

    header.style.display = 'flex';
    
    return;
}



// Se acionado o botão start
btStart.addEventListener('click', () =>{

    var duracao = 70;

    var display = document.getElementById('timer');

    changeTextButton();

    contarTempo(duracao, display);

})


