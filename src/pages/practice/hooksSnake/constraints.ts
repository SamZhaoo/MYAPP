export type Apple = [number, number];
export type Snake = Apple[];

export interface GameBoard {
  snake: Snake;
  apple: Apple;
}
