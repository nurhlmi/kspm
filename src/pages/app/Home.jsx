import { useState } from 'react';
import { Box, Card, CardActionArea, Container, Grid, Stack, Typography } from '@mui/material';
import CountdownSholat from '../../sections/CountdownSholat';
import CardSholat from '../../sections/CardSholat';
import AppPage from '../../components/AppPage';

export default function Home() {
  const [menu] = useState([
    {
      title: 'Jadwal Sholat',
      image: 'schedule.png',
    },
    {
      title: 'Sholat Sunnah',
      image: 'sajadah.png',
    },
    {
      title: `Al-Qur'an`,
      image: 'quran.png',
    },
    {
      title: 'Dzikir',
      image: 'beads.png',
    },
    {
      title: 'Sedekah',
      image: 'charity.png',
    },
    {
      title: 'Puasa',
      image: 'fasting.png',
    },
  ]);

  return (
    <AppPage title="Beranda">
      <Box bgcolor="primary.main" color="#fff" height={200} pt={5}>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography fontWeight="bold">Assalamu'alaikum</Typography>
              <Typography variant="h4" fontWeight="bold" mb={5}>
                Nur Hilmi
              </Typography>
            </Stack>
            <Stack direction="row">
              <img src={`/static/theme1/muslimin.png`} alt="Muslimin" width={50} height={50} />
              <img src={`/static/theme1/muslimah.png`} alt="Muslimah" width={50} height={50} />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <CountdownSholat sx={{ mt: -9, mb: 3 }} />
        <CardSholat />
        <Grid container spacing={3}>
          {menu.map((value, index) => (
            <Grid item xs={4} md={3} mb={1} key={index}>
              <Stack alignItems="center" justifyContent="center">
                <Card>
                  <CardActionArea align="center" sx={{ p: 3 }}>
                    <img src={`/static/theme1/${value.image}`} alt={value.title} width={40} />
                  </CardActionArea>
                </Card>
                <Typography variant="body2" fontWeight="bold" align="center" mt={1}>
                  {value.title}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppPage>
  );
}
