import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { GameControl } from './moduls/GameControl';
import { Food } from './moduls/Food';
import { ScorePanel } from './moduls/ScorePanel';
import { Snake } from './moduls/Snake';
interface Config {
  direction: string;
  food: Food;
  isAlive: boolean;
  scorePanel: ScorePanel;
  snake: Snake;
}
const index = () => {
  const foodDom = useRef<HTMLDivElement>(null);
  const snakeDom = useRef<HTMLDivElement>(null);
  const [scroe, setScore] = useState(0);
  const [level, setlevel] = useState(1);
  const [bodyList, setBodyList] = useState([{}]);
  const [config, setConfig] = useState<GameControl>();
  const getControl = (e: GameControl) => {
    console.log(111);
    setScore(e.scorePanel.score);
    setlevel(e.scorePanel.level);
    setBodyList(e.snake.body);
    setConfig(e);
  };
  const restart = () => {
    console.log(config);
  };
  useEffect(() => {
    const con = new GameControl(
      foodDom.current as HTMLElement,
      snakeDom.current as HTMLElement,
    );
    console.log(con);

    window.addEventListener('keydown', getControl.bind(this, con));
    return () => {
      window.removeEventListener('keydown', getControl.bind(this, con));
    };
  }, []);

  return (
    <>
      <div className={styles.pages}>
        <div className={styles.operate}>
          <Button
            className={styles.btn}
            type="primary"
            onClick={() => restart()}
          >
            restart
          </Button>
        </div>
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
      </div>
    </>
  );
};
export default index;
