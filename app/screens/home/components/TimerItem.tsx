import React from 'react';
import { Card } from 'antd';
import styles from './TimerItem.css';

interface TimerItemProps {
  headerName: string;
  eventDate: string;
}

const cardStyles = {
  body: {
    backgroundColor: '#010101',
    color: 'white',
    textAlign: 'center' as const,
    fontSize: 12,
    padding: 3
  },
  head: {
    backgroundColor: '#010101',
    color: 'white',
    fontSize: 13,
    textAlign: 'center' as const,
    borderBottomColor: '#000'
  }
};

const shouldDisplayWarningColor = (eventDate: string) => {
  const times = eventDate.split(':');
  return times[0] === '0' && times[1] === '00';
};

export default function TimerItem({ headerName, eventDate }: TimerItemProps) {
  return (
    <div className={styles.counter}>
      <Card
        loading={eventDate === ''}
        title={headerName}
        bordered={false}
        size="small"
        headStyle={
          shouldDisplayWarningColor(eventDate)
            ? { ...cardStyles.head, color: '#ffc045' }
            : cardStyles.head
        }
        bodyStyle={cardStyles.body}
      >
        <span>{eventDate}</span>
      </Card>
    </div>
  );
}
