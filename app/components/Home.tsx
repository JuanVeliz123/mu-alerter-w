import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './Home.css';
import { getUpdateEventTimes } from '../utils/DateUtils';

export default function Home() {
  const [cpEventDate, setCpEventDate] = useState('');
  const [mossDate, setMossDate] = useState('');
  const [balrogDate, setBalrogDate] = useState('');
  const [metalBalrogDate, setMetalBalrogDate] = useState('');
  const [iceQueenDate, setIceQueenDate] = useState('');
  const [hydraDate, setHydraDate] = useState('');

  const updateEventTimes = () => {
    const times = getUpdateEventTimes();
    setCpEventDate(times.filter(x => x.name === 'CP')[0].countdown);
    setBalrogDate(times.filter(x => x.name === 'Balrog')[0].countdown);
    setHydraDate(times.filter(x => x.name === 'Hydra')[0].countdown);
    setIceQueenDate(times.filter(x => x.name === 'Ice Queen')[0].countdown);
    setMetalBalrogDate(
      times.filter(x => x.name === 'Metal Balrog')[0].countdown
    );
    setMossDate(times.filter(x => x.name === 'MOSS Gambler')[0].countdown);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateEventTimes();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container} data-tid="container">
      <h1>Mu Alerter</h1>
      <div className={styles.counter}>
        <h3>CP EVENT</h3>
        <span>{cpEventDate}</span>
      </div>
      <div className={styles.counter}>
        <h3>Moss Gambler</h3>
        <span>{mossDate}</span>
      </div>
      <div className={styles.counter}>
        <h3>Balrog</h3>
        <span>{balrogDate}</span>
      </div>
      <div className={styles.counter}>
        <h3>Metal Balrog</h3>
        <span>{metalBalrogDate}</span>
      </div>
      <div className={styles.counter}>
        <h3>Ice Queen</h3>
        <span>{iceQueenDate}</span>
      </div>
      <div className={styles.counter}>
        <h3>Hydra</h3>
        <span>{hydraDate}</span>
      </div>
    </div>
  );
}
