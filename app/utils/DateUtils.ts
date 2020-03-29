const eventTimes = [
  [
    'CP',
    [
      '00:07',
      '00:37',
      '01:07',
      '01:37',
      '02:07',
      '02:37',
      '03:07',
      '03:37',
      '04:07',
      '04:37',
      '05:07',
      '05:37',
      '06:07',
      '06:37',
      '07:07',
      '07:37',
      '08:07',
      '08:37',
      '09:07',
      '09:37',
      '10:07',
      '10:37',
      '11:07',
      '11:37',
      '12:07',
      '12:37',
      '13:07',
      '13:37',
      '14:07',
      '14:37',
      '15:07',
      '15:37',
      '16:07',
      '16:37',
      '17:07',
      '17:37',
      '18:07',
      '18:37',
      '19:07',
      '19:37',
      '20:07',
      '20:37',
      '21:07',
      '21:37',
      '22:07',
      '22:37',
      '23:07',
      '23:37'
    ]
  ],
  ['Canyon Inv', ['11:50', '23:50']],
  ['PET Muun', ['03:45', '07:45', '11:45', '15:45', '19:45', '23:45']],
  ['Undines', ['02:53', '14:53']],
  ['Double Goer', ['02:15', '08:15', '14:15', '20:15']],
  ['MOSS Gambler', ['01:00', '09:00', '17:00']],
  ['Ice Queen', ['00:00', '06:00', '12:00', '18:00']],
  ['Balrog', ['03:12', '11:12', '19:12']],
  ['Hydra', ['12:47', '22:47']],
  ['Gorgon (Loren)', ['06:14', '14:14']],
  ['RedDrag (Noria)', ['03:14', '17:14']],
  ['Skeleton (Elb)', ['10:14', '21:14']],
  ['Metal Balrog', ['03:17', '11:17', '19:17']],
  ['Undines', ['02:53', '14:53']],
  ['Debenter Inv', ['07:53', '19:53']],
  ['Uruk/Nars Inv', ['04:53', '16:53']],
  ['Ferea Inv', ['02:50', '14:50']],
  ['NixLake Inv', ['04:50', '16:50']],
  ['DeepDung Inv', ['06:50', '18:50']],
  ['DarkSwamp Inv', ['08:50', '20:50']],
  ['KuberaMine Inv', ['10:50', '22:50']],
  ['Abyssal Inv', ['12:50', '00:50']],
  ['Canyon Inv', ['11:50', '23:50']],
  [
    'Kundum (K7)',
    [
      '01:38',
      '03:38',
      '05:38',
      '07:38',
      '09:38',
      '11:38',
      '13:38',
      '15:38',
      '17:38',
      '19:38',
      '21:38',
      '23:38'
    ]
  ],
  [
    'Medusa (Swamp)',
    [
      '01:23',
      '03:23',
      '05:23',
      '07:23',
      '09:23',
      '11:23',
      '13:23',
      '15:23',
      '17:23',
      '19:23',
      '21:23',
      '23:23'
    ]
  ]
];

function dateUtc(offset: number) {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * offset);
}

function toSeconds(h: number, m: number, s: number) {
  return h * 3600 + m * 60 + s;
}

interface ParsedTimes {
  name: string;
  countdown: string;
}

export const getUpdateEventTimes = () => {
  const d = dateUtc(-3);
  const time = toSeconds(d.getHours(), d.getMinutes(), d.getSeconds());

  const parsedEventTimes: Array<ParsedTimes> = [];
  for (const element in eventTimes) {
    const line = eventTimes[element];

    let j;
    for (j = 0; j < line[1].length; j++) {
      let t = line[1][j].split(':');
      t = toSeconds(t[0], t[1], 0);

      if (t > time) {
        break;
      }
    }

    j %= eventTimes[element][1].length;
    const t = eventTimes[element][1][j].split(':');

    let diff = toSeconds(t[0], t[1], 0) - time;
    if (diff < 0) {
      diff += 3600 * 24;
    }

    const h = parseInt(diff / 3600);
    diff -= 3600 * h;
    const m = parseInt(diff / 60);
    const s = diff - m * 60;

    const countdown = `${h}:${`0${m}`.slice(-2)}:${`0${s}`.slice(-2)}`;
    parsedEventTimes.push({ name: line[0], countdown });
  }
  return parsedEventTimes;
};
