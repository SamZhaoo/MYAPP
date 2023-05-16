import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { Food } from './moduls/Food';
import { Snake } from './moduls/Snake';
const index = () => {
  const foodDom = useRef<HTMLDivElement>(null);
  const snakeDom = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [snakeBoby, setSnakeBoby] = useState([{}]);

  // 增加得分与等级
  const addScore = () => {
    const getScore = score + 1;
    setScore(getScore);
    const getLevel = Math.floor(getScore / 10) + 1;
    setLevel(getLevel);
    const bodyList = snakeBoby;
    bodyList.push({});
    setSnakeBoby(bodyList);
  };
  // 改变蛇身体
  const changeBody = () => {
    const isHorizon = !isHorizontal;
    setIsHorizontal(isHorizon);
  };

  useEffect(() => {
    const snake = new Snake((snakeDom.current as unknown) as HTMLElement);
    snake.changeBody(isHorizontal);
    snake.changePosition();
  }, [isHorizontal]);

  return (
    <>
      <div className={styles.operate}>
        <Button
          className={styles.btn}
          type="primary"
          onClick={() => addScore()}
        >
          add score
        </Button>
        <Button
          className={styles.btn}
          type="primary"
          onClick={() => changeBody()}
        >
          change snake boby
        </Button>
      </div>

      <div className={styles.main}>
        <div className={styles.panel}>
          <div className={styles.snake} ref={snakeDom}>
            {snakeBoby.map((o, i) => {
              return <div key={i}></div>;
            })}
          </div>
          <div className={styles.food} ref={foodDom}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.item}>
            score：<span>{score}</span>
          </div>
          <div className={styles.item}>
            level：<span>{level}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
