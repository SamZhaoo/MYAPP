import React, { useState, useEffect, useRef } from 'react';
import { Snake, Apple } from './constraints';
import {
  APPLE_START,
  APPLE_SCORE,
  checkCollision,
  getRandomCoord,
} from './util';
export const useApple = (snake: Snake) => {
  const [apple, setApple] = useState<Apple>(APPLE_START);
  const [score, setScore] = useState(0);

  const updateApple = () => {
    const newApple: Apple = [getRandomCoord(), getRandomCoord()];

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
