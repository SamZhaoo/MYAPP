import React, { useState, useEffect, useRef } from 'react';
import { Snake, Apple } from './constraints';
import { SNAKE_START } from './util';
export function useSnake() {
  const [snake, setSnake] = useState<Snake>(SNAKE_START);
  const [direction, setDirection] = useState([0, 1]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    const [dirX, dirY] = direction;
    const [headX, headY] = head;
    const newHead: Apple = [headX + dirX, headY + dirY];
    newSnake.push(newHead);
    newSnake.shift();
    setSnake(newSnake);
  };
  useEffect(() => {
    moveSnake();
  }, [direction]);

  const handleDirectionChange = (event: any) => {
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
}
