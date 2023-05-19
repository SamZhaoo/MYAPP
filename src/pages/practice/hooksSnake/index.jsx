import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const BOARD_SIZE = 20;
const SNAKE_START = [
  [10, 10],
  [10, 11],
  [10, 12],
];
const APPLE_START = [5, 5];
const APPLE_SCORE = 10;

const getRandomCoord = () => {
  return Math.floor(Math.random() * BOARD_SIZE);
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const useSnake = () => {
  const [snake, setSnake] = useState(SNAKE_START);
  const [direction, setDirection] = useState([0, 1]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    const [dirX, dirY] = direction;
    const [headX, headY] = head;
    const newHead = [headX + dirX, headY + dirY];
    newSnake.push(newHead);
    newSnake.shift();
    setSnake(newSnake);
  };
  useEffect(() => {
    moveSnake();
  }, [direction]);

  const handleDirectionChange = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 37) {
      setDirection([0, -1]);
    } else if (event.keyCode === 38) {
      setDirection([-1, 0]);
    } else if (event.keyCode === 39) {
      setDirection([0, 1]);
    } else if (event.keyCode === 40) {
      setDirection([1, 0]);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleDirectionChange);
    return () => {
      document.removeEventListener('keydown', handleDirectionChange);
    };
  }, []);

  return { snake, moveSnake };
};

const useApple = (snake) => {
  const [apple, setApple] = useState(APPLE_START);
  const [score, setScore] = useState(0);
  const checkCollision = (obj1, obj2) => {
    return obj1[0] === obj2[0] && obj1[1] === obj2[1];
  };

  const updateApple = () => {
    const newApple = [getRandomCoord(), getRandomCoord()];

    if (snake.some((segment) => checkCollision(segment, apple))) {
      setApple(newApple);
      setScore(score + APPLE_SCORE);
    }
  };

  useEffect(() => {
    updateApple();
  }, [snake]);

  return { apple, updateApple, score };
};

const GameBoard = ({ snake, apple }) => {
  const renderGridItem = (rowIndex, colIndex) => {
    let className = 'grid-item ';
    if (
      snake.some((segment) => checkCollision(segment, [rowIndex, colIndex]))
    ) {
      className += 'snake';
    } else if (checkCollision([rowIndex, colIndex], apple)) {
      className += 'apple';
    }
    return (
      <div key={`${rowIndex}-${colIndex}`} className={className}>
        {!rowIndex && colIndex}
        {!colIndex && rowIndex}
      </div>
    );
  };

  return (
    <div className="game-board">
      {Array(BOARD_SIZE)
        .fill('')
        .map((row, rowIndex) =>
          Array(BOARD_SIZE)
            .fill('')
            .map((col, colIndex) => renderGridItem(rowIndex, colIndex)),
        )}
    </div>
  );
};
const checkCollision = (obj1, obj2) => {
  return obj1[0] === obj2[0] && obj1[1] === obj2[1];
};
const App = () => {
  const { snake, moveSnake } = useSnake();
  const { apple, updateApple, score } = useApple(snake);
  useInterval(() => {
    moveSnake();
    // const head = snake[snake.length - 1];
    // console.log(head)
    // if (checkCollision(head, apple)) {
    //   updateApple();
    // }
  }, 200);

  return (
    <div>
      <GameBoard snake={snake} apple={apple} />
      <div className="game-score">Score: {score}</div>
    </div>
  );
};

export default App;
