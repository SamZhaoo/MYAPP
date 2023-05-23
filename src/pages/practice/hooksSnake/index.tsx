import React, { useState, useEffect, useRef } from 'react';
import { useSnake } from './useSnake';
import { useApple } from './useApple';
import GameBoard from './gameBoard';

const App = () => {
  const { snake, moveSnake } = useSnake();
  const { apple, updateApple, score } = useApple(snake);
  const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current && savedCallback.current();
      };
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
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
