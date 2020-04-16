import React, { useEffect, useState } from 'react';
import { Descriptions, Progress } from 'antd';
import styles from './playerStatus.css';

interface Props {
  name: string;
  url: string;
}

interface PlayerStatusState {
  level: string;
  location: string;
  resets: string;
  grandResets: string;
}

function PlayerStatus({ name, url }: Props) {
  const [playerStatus, setPlayerStatus] = useState<PlayerStatusState>({
    grandResets: '',
    level: '',
    location: '',
    resets: ''
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(res => {
        const charTable = new DOMParser()
          .parseFromString(res, 'text/html')
          .getElementsByClassName('ranking-table')[0].children[1].children[0]
          .children[1].children[0].children[0].children;
        const newPlayerStatus: PlayerStatusState = {
          level: charTable[2].children[1].textContent ?? '',
          resets: charTable[4].children[1].textContent ?? '',
          grandResets: charTable[5].children[1].textContent ?? '',
          location: charTable[7].children[1].textContent?.trim() ?? ''
        };
        setPlayerStatus(newPlayerStatus);
        return setLoading(false);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <div className={styles.card}>
      {loading && <Progress percent={100} status="active" showInfo={false} />}
      {!loading && (
        <Descriptions
          title={name}
          className={styles.cardDescription}
          column={1}
          colon={false}
        >
          <Descriptions.Item
            label="Level"
            className={styles.cardDescriptionItem}
          >
            {playerStatus.level}
          </Descriptions.Item>
          <Descriptions.Item
            label="Location"
            className={styles.cardDescriptionItem}
          >
            {playerStatus.location}
          </Descriptions.Item>
          <Descriptions.Item
            label="Resets"
            className={styles.cardDescriptionItem}
          >
            {playerStatus.resets}
          </Descriptions.Item>
          <Descriptions.Item
            label="Grand Resets"
            className={styles.cardDescriptionItem}
          >
            {playerStatus.grandResets}
          </Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
}

export default PlayerStatus;
