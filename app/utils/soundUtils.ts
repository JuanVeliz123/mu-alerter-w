// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Howl } from 'howler';
import path from 'path';

const alarmSoundPath = path.resolve(__dirname, '../resources/sounds/ding.mp3');

export const playDingAlert = () => {
  const sound = new Howl({
    src: [alarmSoundPath],
    volume: 0.5
  });
  sound.play();
};
