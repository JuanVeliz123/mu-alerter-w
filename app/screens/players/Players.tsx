import React from 'react';
import styles from './players.css';
import PlayerStatus from './components/PlayerStatus';

function Players() {
  return (
    <div className={styles.container}>
      <PlayerStatus
        name="JohnV"
        url="https://epicmu.com/character/4a6f686e56/EX100"
      />
      <PlayerStatus
        name="Sha256"
        url="https://epicmu.com/character/536861323536/EX100"
      />
      <PlayerStatus
        name="Metabee"
        url="https://epicmu.com/character/4d657461626565/EX100"
      />
      <PlayerStatus
        name="Magui"
        url="https://epicmu.com/character/4d61677569/EX100"
      />
      <PlayerStatus
        name="Duze"
        url="https://epicmu.com/character/44757a65/EX100"
      />
      <PlayerStatus
        name="Lolita"
        url="https://epicmu.com/character/4c6f6c697461/EX100"
      />
      <PlayerStatus
        name="Shaka"
        url="https://epicmu.com/character/5368616b61/EX100"
      />
    </div>
  );
}

export default Players;
