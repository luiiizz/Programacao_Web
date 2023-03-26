import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  // Método para alternar entre jogadores após cada jogada
  function changePlayer() {
    setPlayer(player === "X" ? "O" : "X");
  }

  // Método para verificar se há um vencedor após cada jogada
  function checkWinner() {
    const winConditions = [
      // Condições de vitória em um jogo da velha padrão (três em linha, coluna ou diagonal)
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(player);
        return;
      }
    }

    // Se todas as células estiverem preenchidas e ninguém ganhou, então é um empate
    if (!board.includes(null)) {
      setWinner("Draw");
    } else {
      changePlayer();
    }
  }

  // Método que é chamado quando uma célula é clicada
  function handleClick(index: number) {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      checkWinner();
    }
  }

  // Método para reiniciar o jogo
  function resetGame() {
    setBoard(Array(9).fill(null));
    setWinner("");
    setPlayer("X");
  }

  // Renderiza o tabuleiro do jogo da velha
  const renderBoard = () => (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );

  return (
    <div className="game">
      {renderBoard()}
      {winner ? (
        <div className="winner">
          {winner === "Draw" ? "Empate!" : `O vencedor é ${winner}`}
          <button onClick={resetGame}>Reiniciar jogo</button>
        </div>
      ) : (
        <div className="player">É a vez do jogador {player}</div>
      )}
    </div>
  );
}

export default TicTacToe;