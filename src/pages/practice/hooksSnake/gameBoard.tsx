import React, { useState, useEffect, useRef } from 'react';
import { GameBoard } from './constraints';
import { snake, moveSnake } from './useSnake';
import { BOARD_SIZE, checkCollision } from './util';

const GameBoard: React.FC<GameBoard> = ({ snake, apple }) => {
  const renderGridItem = (rowIndex: number, colIndex: number) => {
    let className = 'grid-item ';
    if (
      snake.some((segment: any) =>
        checkCollision(segment, [rowIndex, colIndex]),
      )
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
            .map((col, colIndex) =>
              renderGridItem(rowIndex as number, colIndex as number),
            ),
        )}
    </div>
  );
};

export default GameBoard;
