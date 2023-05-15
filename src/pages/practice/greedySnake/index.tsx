import React, { useEffect, useState, useRef } from 'react';
import styles from './index.less';
import { Food } from './Food';
const index = () => {
  const foodDom = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const food = new Food((foodDom.current as unknown) as HTMLElement);
  food.change(300);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.panel}>
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
