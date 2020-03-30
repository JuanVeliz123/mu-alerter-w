import React, { useEffect, useState } from 'react';
import styles from './Home.css';
import { getUpdateEventTimes } from '../utils/DateUtils';

export default function Home() {
  const [cpEventDate, setCpEventDate] = useState('');
  const [mossDate, setMossDate] = useState('');
  const [balrogDate, setBalrogDate] = useState('');
  const [metalBalrogDate, setMetalBalrogDate] = useState('');
  const [iceQueenDate, setIceQueenDate] = useState('');
  const [hydraDate, setHydraDate] = useState('');
  const [fereaInvDate, setFereaInvDate] = useState('');
  const [canyonInvDate, setCanyonInvDate] = useState('');
  const [undinesInvDate, setUndinesInvDate] = useState('');
  const [debenterInvDate, setDebenterInvDate] = useState('');
  const [urukNarsInvDate, setUrukNarsInvDate] = useState('');
  const [nixInvDate, setNixInvDate] = useState('');
  const [deepDungInvDate, setDeepDungInvDate] = useState('');
  const [darkSwampInvDate, setDarkSwampInvDate] = useState('');
  const [kuberaMineInvDate, setKuberaMineInvdate] = useState('');
  const [abyssalInvDate, setAbyssalInvDate] = useState('');
  const [medusaInvDate, setMedusaInvDate] = useState('');
  const [gorgonInvDate, setGorgonInvDate] = useState('');

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
    setFereaInvDate(times.filter(x => x.name === 'Ferea')[0].countdown);
    setCanyonInvDate(times.filter(x => x.name === 'Canyon')[0].countdown);
    setUndinesInvDate(times.filter(x => x.name === 'Undines')[0].countdown);
    setDebenterInvDate(times.filter(x => x.name === 'Debenter')[0].countdown);
    setUrukNarsInvDate(times.filter(x => x.name === 'UrukNars')[0].countdown);
    setNixInvDate(times.filter(x => x.name === 'NixLake')[0].countdown);
    setDeepDungInvDate(times.filter(x => x.name === 'DeepDung')[0].countdown);
    setDarkSwampInvDate(times.filter(x => x.name === 'DarkSwamp')[0].countdown);
    setKuberaMineInvdate(times.filter(x => x.name === 'Abyssal')[0].countdown);
    setAbyssalInvDate(times.filter(x => x.name === 'DarkSwamp')[0].countdown);
    setGorgonInvDate(times.filter(x => x.name === 'DarkSwamp')[0].countdown);
    setMedusaInvDate(times.filter(x => x.name === 'Gorgon')[0].countdown);
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
      <div className={styles.lists}>
        <div className={styles.listRow}>
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
          <div className={styles.counter}>
            <h3>Ferea invasion</h3>
            <span>{fereaInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Kubera Mine Invasion</h3>
            <span>{kuberaMineInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Gorgon invasion</h3>
            <span>{gorgonInvDate}</span>
          </div>
        </div>

        <div className={styles.listRow}>
          <div className={styles.counter}>
            <h3>Canyon Invasion</h3>
            <span>{canyonInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Undines Invasion</h3>
            <span>{undinesInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Debenter Invasion</h3>
            <span>{debenterInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Uruk/Nars Invasion</h3>
            <span>{urukNarsInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Nix Lake Invasion</h3>
            <span>{nixInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Deep Dung Invasion</h3>
            <span>{deepDungInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Dark Swamp Invasion</h3>
            <span>{darkSwampInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Abyssal Invasion</h3>
            <span>{abyssalInvDate}</span>
          </div>
          <div className={styles.counter}>
            <h3>Medusa Invasion</h3>
            <span>{medusaInvDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
