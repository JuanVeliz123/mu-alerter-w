import React from 'react';
import styles from './TimerItem.css';

interface TimerItemProps {
  headerName: string;
  eventDate: string;
}

const shouldDisplayWarningColor = (eventDate: string) => {
  const times = eventDate.split(':');
  return times[0] === '0' && times[1] === '00';
};

export default function TimerItem({ headerName, eventDate }: TimerItemProps) {
  return (
    <div
      className={styles.counter}
      style={shouldDisplayWarningColor(eventDate) ? { color: 'yellow' } : {}}
    >
      <h3>{headerName}</h3>
      <span>{eventDate}</span>
    </div>
  );
}
