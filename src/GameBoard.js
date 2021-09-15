import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import TicTacToeContext from './context/TicTacToeContext';
import './GameBoard.css';

const GameBoard = () => {
  const { gameBoard } = useContext(TicTacToeContext);

  return (
    <div className="game-board">
      {gameBoard.map((playerId, i) => (
        <GameCell
          id={i}
          key={i}
          content={playerId}
        />
      )
      )}
    </div>
  );
}

GameBoard.propTypes = {
  gameBoard: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;
