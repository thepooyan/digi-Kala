import React from 'react';
import styles from './Sample.module.scss'

const Sample = () => {
  return <div className={styles.wrap}>
      <h2 className={styles.text}>This is a sample component</h2>
      <p className={styles.text}>all components should have a margin-bottom</p>
      <p className={styles.text}>all components are added in app js using route</p>
      <p className={styles.text}>all styles are written in <b>SASS</b> and with the use of <b>CSS Module</b>!</p>
  </div>;
};

export default Sample;
