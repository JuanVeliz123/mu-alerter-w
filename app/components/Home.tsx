/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { remote } from 'electron';
import styles from './Home.css';
import { getUpdateEventTimes } from '../utils/DateUtils';

export default function Home() {
  // eslint-disable-next-line spaced-comment
  //#region State Definition
  const [cpEventDate, setCpEventDate] = useState('');
  const [shouldAlertCp, setShouldAlertCp] = useState(true);
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
  // eslint-disable-next-line spaced-comment
  //#endregion

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
    setGorgonInvDate(times.filter(x => x.name === 'Gorgon')[0].countdown);
    setMedusaInvDate(times.filter(x => x.name === 'Medusa')[0].countdown);
  };

  const showWindowOnTop = () => {
    const window = remote.getCurrentWindow();
    if (window.isAlwaysOnTop()) {
      return;
    }
    window.setAlwaysOnTop(true, 'status');
    window.show();
    setTimeout(() => {
      window.setAlwaysOnTop(false);
    }, 300);
  };

  const getCounterStyles = (eventDate: string) => {
    const splitted = eventDate.split(':');
    if (splitted[0] === '0' && splitted[1] === '00') {
      return { className: styles.counter, style: { color: 'yellow' } };
    }
    return { className: styles.counter };
  };

  const popWindowIfNecessary = () => {
    if (!shouldAlertCp) {
      return;
    }
    const splitted = cpEventDate.split(':');
    if (
      splitted[0] === '0' &&
      splitted[1] === '00' &&
      parseInt(splitted[2], 10) <= 10
    ) {
      showWindowOnTop();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateEventTimes();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    popWindowIfNecessary();
  }, [cpEventDate]);

  return (
    <div className={styles.container} data-tid="container">
      <h1>Mu Alerter</h1>
      <div className={styles.lists}>
        <div className={styles.listRow}>
          <div {...getCounterStyles(cpEventDate)}>
            <h3>CP EVENT</h3>
            <span>{cpEventDate}</span>
            <span style={{ marginLeft: 10 }}>
              Alert?
              <input
                type="checkbox"
                checked={shouldAlertCp}
                onChange={() => setShouldAlertCp(!shouldAlertCp)}
              />
            </span>
          </div>
          <div {...getCounterStyles(mossDate)}>
            <h3>Moss Gambler</h3>
            <span>{mossDate}</span>
          </div>
          <div {...getCounterStyles(balrogDate)}>
            <h3>Balrog</h3>
            <span>{balrogDate}</span>
          </div>
          <div {...getCounterStyles(metalBalrogDate)}>
            <h3>Metal Balrog</h3>
            <span>{metalBalrogDate}</span>
          </div>
          <div {...getCounterStyles(iceQueenDate)}>
            <h3>Ice Queen</h3>
            <span>{iceQueenDate}</span>
          </div>
          <div {...getCounterStyles(hydraDate)}>
            <h3>Hydra</h3>
            <span>{hydraDate}</span>
          </div>
          <div {...getCounterStyles(fereaInvDate)}>
            <h3>Ferea invasion</h3>
            <span>{fereaInvDate}</span>
          </div>
          <div {...getCounterStyles(kuberaMineInvDate)}>
            <h3>Kubera Mine Invasion</h3>
            <span>{kuberaMineInvDate}</span>
          </div>
          <div {...getCounterStyles(gorgonInvDate)}>
            <h3>Gorgon invasion</h3>
            <span>{gorgonInvDate}</span>
          </div>
        </div>

        <div {...getCounterStyles(canyonInvDate)}>
          <div className={styles.counter}>
            <h3>Canyon Invasion</h3>
            <span>{canyonInvDate}</span>
          </div>
          <div {...getCounterStyles(undinesInvDate)}>
            <h3>Undines Invasion</h3>
            <span>{undinesInvDate}</span>
          </div>
          <div {...getCounterStyles(debenterInvDate)}>
            <h3>Debenter Invasion</h3>
            <span>{debenterInvDate}</span>
          </div>
          <div {...getCounterStyles(urukNarsInvDate)}>
            <h3>Uruk/Nars Invasion</h3>
            <span>{urukNarsInvDate}</span>
          </div>
          <div {...getCounterStyles(nixInvDate)}>
            <h3>Nix Lake Invasion</h3>
            <span>{nixInvDate}</span>
          </div>
          <div {...getCounterStyles(deepDungInvDate)}>
            <h3>Deep Dung Invasion</h3>
            <span>{deepDungInvDate}</span>
          </div>
          <div {...getCounterStyles(darkSwampInvDate)}>
            <h3>Dark Swamp Invasion</h3>
            <span>{darkSwampInvDate}</span>
          </div>
          <div {...getCounterStyles(abyssalInvDate)}>
            <h3>Abyssal Invasion</h3>
            <span>{abyssalInvDate}</span>
          </div>
          <div {...getCounterStyles(medusaInvDate)}>
            <h3>Medusa Invasion</h3>
            <span>{medusaInvDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
