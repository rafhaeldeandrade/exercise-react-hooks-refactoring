import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import TicTacToeContext from './context/TicTacToeContext';
import './GameCell.css';
import oImage from './o.svg';
import xImage from './x.png';

const GameCell = ({ content, id }) => {
  const { gameBoard, activePlayer, setActivePlayer, setGameBoard } = useContext(TicTacToeContext);
  
  const toggleActivePlayer = () => {
    if (activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    const newState = [...gameBoard];
    let newActivePlayer = activePlayer;

    if (gameBoard[cellClicked] === 0) {
      newState[cellClicked] = activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else newState[cellClicked] = gameBoard[cellClicked];

    setActivePlayer(newActivePlayer);
    setGameBoard(newState);
  }

  if (content === 1) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onClick={() => updateState(id)}
        onKeyPress={() => updateState(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
      </div>
    );
  }

  if (content === 2) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onClick={() => updateState(id)}
        onKeyPress={() => updateState(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="Cell"
      data-testid={`cell_${id}`}
      className="game-cell"
      onClick={() => updateState(id)}
      onKeyPress={() => updateState(id)}
    />
  );
}

GameCell.propTypes = {
  content: PropTypes.oneOf([0, 1, 2]),
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

GameCell.defaultProps = {
  content: 0,
};

export default GameCell;
