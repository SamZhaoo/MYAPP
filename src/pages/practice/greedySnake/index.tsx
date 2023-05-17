import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { gameControl } from './moduls/gameControl';
const index = () => {
  const foodDom = useRef<HTMLDivElement>(null);
  const snakeDom = useRef<HTMLDivElement>(null);
  const [scroe, setScore] = useState(0);
  const [level, setlevel] = useState(1);
  const [bodyList, setBodyList] = useState([{}]);
  const getControl = (e: gameControl) => {
    setScore(e.scorePanel.score);
    setlevel(e.scorePanel.level);
    setBodyList(e.snake.body);
  };
  useEffect(() => {
    const con = new gameControl(
      foodDom.current as HTMLElement,
      snakeDom.current as HTMLElement,
    );

    window.addEventListener('keydown', getControl.bind(this, con));
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.panel}>
          <div className={styles.snake} ref={snakeDom}>
            {bodyList.map((e, i) => {
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
            score：<span>{scroe}</span>
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
