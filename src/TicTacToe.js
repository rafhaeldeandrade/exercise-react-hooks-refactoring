import React, { useContext } from 'react';
import TicTacToeContext from './context/TicTacToeContext';
import GameBoard from './GameBoard';

const TicTacToe = () => {
  const { gameBoard, resetGame } = useContext(TicTacToeContext);

  const victoryArchivedInLine = (gb) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gb[i] === gb[i + 1]
        && gb[i + 1] === gb[i + 2]
        && gb[i] !== 0
      ) return gb[i];
    }
    return false;
  }

  const victoryArchivedInColumn = (gb) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gb[i] === gb[i + 3]
        && gb[i + 3] === gb[i + 6]
        && gb[i] !== 0
      ) return gb[i];
    }
    return false;
  }

  const victoryArchivedInDiagonals = (gb) => {
    if (gb[4] === 0) return false;
    if (gb[0] === gb[4] && gb[4] === gb[8]) {
      return gb[0];
    }
    if (gb[2] === gb[4] && gb[4] === gb[6]) {
      return gb[2];
    }
    return false;
  }

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => (
    <button
      type="button"
      onClick={resetGame}
      data-testid="restart-button"
    >
      Recomeçar Jogo
    </button>
  );
  
  const win = victoryArchieved();

  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }

  return (
    <>
      {renderButton()}
      {(!win)
        ? (
          <GameBoard/>
        )
        : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
    </>
  );
}

export default TicTacToe;
