/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

// Iniciar Game

function startGame(){

  // Selecionando todas as cartas
  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  var countForWin = 0;

  // Função para virar carta
  function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;

      return;
    }

    secondCard = this;
    checkForMatch();
  }

  //  Verificar se as cartas são iguais
  function checkForMatch() {
    let isMatch = firstCard.dataset.aeronave === secondCard.dataset.aeronave;

    isMatch ? disableCards() : unflipCards();

  }

  // Se sim, deixar cartas para cima e contar pares formados
  function disableCards() {
    countForWin++;

    if(countForWin === 6){

      setTimeout(mens,1200);

        function mens(){
        header = document.querySelector('header').style.display = 'none';
        section = document.querySelector('section').style.display = 'none';
        body = document.querySelector('body');

        h1 = '<h1 id="win">PARABÉNS!! VOCÊ GANHOU!!</h1>'

        body.innerHTML = h1;
        
        setTimeout(()=>{
            self.location = 'index.html';
        }, 2500)

        return;
      }
    }

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  // Retornar carta para baixo
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  // Resetar Painel
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  // Aplicar função flipCard para lista de cartas obtidas
  cards.forEach(card => card.addEventListener('click', flipCard));

}