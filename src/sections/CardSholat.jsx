import { useState } from 'react';
import { ChevronLeftRounded, ChevronRightRounded, GroupsRounded, PersonRounded } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Checkbox, Divider, IconButton, Stack, Typography } from '@mui/material';
import moment from 'moment';

export default function CardSholat() {
  const [sholat, setSholat] = useState([
    {
      title: 'Subuh',
      progress: 0,
    },
    {
      title: 'Dzuhur',
      progress: 0,
    },
    {
      title: 'Ashar',
      progress: 0,
    },
    {
      title: 'Maghrib',
      progress: 0,
    },
    {
      title: 'Isya',
      progress: 0,
    },
  ]);

  const handleCheckbox = (name, key) => {
    let progress = 0;
    if (name === 'jamaah') {
      progress = 100;
    } else {
      progress = 50;
    }
    const newState = sholat.map((value, index) =>
      index === key
        ? {
            ...value,
            progress: value.progress !== progress ? progress : 0,
          }
        : value
    );
    setSholat(newState);
  };

  const [date, setDate] = useState(moment(new Date()).format('yyyy-MM-DD'));
  const yesterday = ((d) => moment(new Date(d.setDate(d.getDate() - 1))).format('yyyy-MM-DD'))(new Date(date));
  const tomorrow = ((d) => moment(new Date(d.setDate(d.getDate() + 1))).format('yyyy-MM-DD'))(new Date(date));
  //   console.clear();
  //   console.log(new Date(date).valueOf());
  //   console.log(yesterday);
  //   console.log(new Date(tomorrow).valueOf());

  return (
    <Card sx={{ mb: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" m={1.1}>
        <Box>
          <IconButton onClick={() => setDate(yesterday)}>
            <ChevronLeftRounded />
          </IconButton>
        </Box>
        <Button>{moment(date).format('dddd, LL')}</Button>
        <Box>
          <IconButton onClick={() => setDate(tomorrow)} disabled={new Date().valueOf() < new Date(tomorrow).valueOf()}>
            <ChevronRightRounded />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
      <CardContent sx={{ pr: 1.5, pb: '1rem!important' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography fontWeight="bold">Sholat</Typography>
          <Stack direction="row" spacing={2.2} mr={1.1}>
            <GroupsRounded />
            <PersonRounded />
          </Stack>
        </Stack>
        {sholat.map((value, index) => (
          <Stack direction="row" alignItems="center" justifyContent="space-between" key={index}>
            <Typography color="text.secondary">{value.title}</Typography>
            <Stack direction="row">
              <Checkbox onChange={() => handleCheckbox('jamaah', index)} checked={value.progress === 100} />
              <Checkbox onChange={() => handleCheckbox('sendiri', index)} checked={value.progress === 50} />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
