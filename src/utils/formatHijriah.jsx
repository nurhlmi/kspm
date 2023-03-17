/* eslint-disable no-undef */
const hijriDateMonth = [
  null,
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
  `Dzulhijjah`,
];

const fDateHijriah = () => {
  const hijriDateObject = new HijriDate();
  const d = hijriDateObject.getDate();
  const m = hijriDateMonth[hijriDateObject.getMonth() + 1];
  const y = hijriDateObject.getFullYear();
  return `${d} ${m} ${y} H`;
};

export default fDateHijriah;
