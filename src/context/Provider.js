import React, { useState } from 'react';
import TicTacToeContext from "./TicTacToeContext";

const Provider = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const contextValue = {
    activePlayer,
    gameBoard,
    setActivePlayer,
    setGameBoard,
    resetGame,
  }

  return (
    <TicTacToeContext.Provider value={ contextValue }>
      { children }
    </TicTacToeContext.Provider>
  );
}

export default Provider;
