import { Snake, Apple } from './constraints';
export const BOARD_SIZE = 20;
export const SNAKE_START: Snake = [
  [10, 10],
  [10, 11],
  [10, 12],
];
export const APPLE_START: Apple = [5, 5];
export const APPLE_SCORE = 10;

export const checkCollision = (obj1: Array<number>, obj2: Array<number>) => {
  return obj1[0] === obj2[0] && obj1[1] === obj2[1];
};

export const getRandomCoord = () => {
  return Math.floor(Math.random() * BOARD_SIZE);
};
