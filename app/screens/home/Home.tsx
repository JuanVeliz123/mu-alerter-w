import React, { useEffect, useState } from 'react';
import styles from './Home.css';
import { getUpdateEventTimes } from '../../utils/dateUtils';
import { playDingAlert } from '../../utils/soundUtils';
import TimerItem from './components/TimerItem';

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

  const popWindowIfNecessary = () => {
    if (!shouldAlertCp) {
      return;
    }
    const splitted = cpEventDate.split(':');
    if (
      splitted[0] === '0' &&
      splitted[1] === '00' &&
      parseInt(splitted[2], 10) === 10
    ) {
      playDingAlert();
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
    <>
      <div className={styles.container} data-tid="container">
        <div className={styles.lists}>
          <div className={styles.listRow}>
            <TimerItem headerName="CP EVENT" eventDate={cpEventDate} />
            <TimerItem headerName="Moss Gambler" eventDate={mossDate} />
            <TimerItem headerName="Balrog" eventDate={balrogDate} />
            <TimerItem headerName="Metal Balrog" eventDate={metalBalrogDate} />
            <TimerItem headerName="Ice Queen" eventDate={iceQueenDate} />
            <TimerItem headerName="Hydra" eventDate={hydraDate} />
            <TimerItem headerName="Ferea Invasion" eventDate={fereaInvDate} />
            <TimerItem
              headerName="Kubera Invasion"
              eventDate={kuberaMineInvDate}
            />
            <TimerItem headerName="Gorgon Invasion" eventDate={gorgonInvDate} />
          </div>

          <div className={styles.listRow}>
            <TimerItem headerName="Canyon Invasion" eventDate={canyonInvDate} />
            <TimerItem
              headerName="Undines Invasion"
              eventDate={undinesInvDate}
            />
            <TimerItem
              headerName="Debenter Invasion"
              eventDate={debenterInvDate}
            />
            <TimerItem
              headerName="Uruk/Nars Invasion"
              eventDate={urukNarsInvDate}
            />
            <TimerItem headerName="Nix Invasion" eventDate={nixInvDate} />
            <TimerItem
              headerName="Deep Dungeon Inv"
              eventDate={deepDungInvDate}
            />
            <TimerItem
              headerName="Dark Swamp Inv"
              eventDate={darkSwampInvDate}
            />
            <TimerItem
              headerName="Abyssal Invasion"
              eventDate={abyssalInvDate}
            />
            <TimerItem headerName="Medusa Invasion" eventDate={medusaInvDate} />
          </div>
        </div>
      </div>
    </>
  );
}
