/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { AccessTimeRounded } from '@mui/icons-material';
import axios from 'axios';
import moment from 'moment';
import formatHijriah from '../utils/formatHijriah';
import Loading from '../components/Loading';

const CustomCard = (props) => {
  const { name, time } = { ...props };
  return (
    <Box sx={{ p: 2, mt: 2, border: '1px #e0e0e0 solid', borderRadius: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccessTimeRounded />
          <Typography variant="h6">{name}</Typography>
        </Stack>
        <Typography variant="h6">{time}</Typography>
      </Stack>
    </Box>
  );
};

export default function HighlightSholat() {
  const [data, setData] = useState();
  const date = moment().format('L');
  // eslint-disable-next-line no-undef
  const d = date.substr(0, 2);
  const m = date.substr(3, 2);
  const y = date.substr(6, 4);

  const getSholat = async () => {
    const res = await axios.get(`https://api.myquran.com/v1/sholat/jadwal/1204/${y}/${m}/${d}`);
    return res.data.data;
  };

  useEffect(() => {
    Promise.all([getSholat()]).then((res) => {
      // console.log(res[0]);
      const { lokasi, jadwal } = res[0];
      const sholat = [jadwal.subuh, jadwal.dzuhur, jadwal.ashar, jadwal.maghrib, jadwal.isya];

      const currentTime = moment().valueOf();
      const eventTime = moment(new Date('2023-03-26 04:42')).valueOf();
      const diffTime = eventTime - currentTime;

      const duration = moment.duration(diffTime, 'milliseconds');
      const countdown = `${duration.hours() > 0 ? `${duration.hours()} Jam, ` : ''}${duration.minutes()} menit menuju`;

      // console.clear();
      // console.log(diffTime);
      // console.log(jadwal);

      setData({
        lokasi,
        sholat,
        jadwal,
        countdown,
      });

      // setTimeout(() => {
      //   console.log(data);
      // }, 500);
    });
  }, []);

  return data ? (
    <Card>
      <CardContent>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={{ xs: 0, md: 1 }} mb={2}>
          <Typography variant="h6">{moment().format('dddd, LL')}</Typography>
          <Typography variant="h6" color="primary.main">
            ({formatHijriah()})
          </Typography>
        </Stack>
        <CustomCard name="Subuh" time={data.sholat[0]} />
        <CustomCard name="Dzuhur" time={data.sholat[1]} />
        <CustomCard name="Ashar" time={data.sholat[2]} />
        <CustomCard name="Maghrib" time={data.sholat[3]} />
        <CustomCard name="Isya" time={data.sholat[4]} />
      </CardContent>
    </Card>
  ) : (
    <Loading />
  );
}
