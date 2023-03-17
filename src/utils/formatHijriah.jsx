/* eslint-disable no-plusplus */
/* eslint-disable no-array-constructor */

let fixd = null;
let e = null;

function isGregLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function gregToFixed(year, month, day) {
  const a = Math.floor((year - 1) / 4);
  const b = Math.floor((year - 1) / 100);
  const c = Math.floor((year - 1) / 400);
  const d = Math.floor((367 * month - 362) / 12);

  if (month <= 2) e = 0;
  else if (month > 2 && isGregLeapYear(year)) e = -1;
  else e = -2;

  return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
}

class Hijri {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.toFixed = hijriToFixed;
    this.toString = hijriToString;
  }
}

function hijriToFixed() {
  return (
    this.day +
    Math.ceil(29.5 * (this.month - 1)) +
    (this.year - 1) * 354 +
    Math.floor((3 + 11 * this.year) / 30) +
    227015 -
    1
  );
}

function hijriToString() {
  const months = new Array(
    `Muharram`,
    `Shafar`,
    `Rabi'ul Awal`,
    `Rabi'ul Akhir`,
    `Jumadil Awal`,
    `Jumadil Akhir`,
    `Rajab`,
    `Sya'ban`,
    `Ramadhan`,
    `Syawwal`,
    `Dzulqa'dah`,
    `Dzulhijjah`
  );
  return `${this.day} ${months[this.month - 1]} ${this.year}`;
}

function fixedToHijri(f) {
  const i = new Hijri(1100, 1, 1);
  i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
  const i2 = new Hijri(i.year, 1, 1);
  const m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
  i.month = Math.min(m, 12);
  i2.year = i.year;
  i2.month = i.month;
  i2.day = 1;
  i.day = f - i2.toFixed() + 1;
  return i;
}

const tod = new Date();
// const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
// const monthname = new Array(
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December'
// );

const formatHijriah = () => {
  const y = tod.getFullYear();
  let m = tod.getMonth();
  const d = tod.getDate();
  // const dow = tod.getDay();
  m++;
  fixd = gregToFixed(y, m, d);
  // const h = new Hijri(1421, 11, 28);
  const h = fixedToHijri(fixd);
  // document.write(h);
  // document.write(`${weekday[dow]} ${d} ${monthname[m]} ${y} | ${h} ${h.toString()} H`);
  return `${h} H`;
};

export default formatHijriah;
