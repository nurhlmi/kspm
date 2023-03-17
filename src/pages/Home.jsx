/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { AccessTimeRounded, PinDropOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import Page from '../components/Page';
import Loading from '../components/Loading';
import fDateHijriah from '../utils/formatHijriah';

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

export default function Home() {
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
      setData({
        sholat: res[0].jadwal,
      });
    });
  }, []);

  return (
    <Page title="Kelompok Studi Pelajar Muslim">
      <Box sx={{ background: 'linear-gradient(0deg, rgba(248,246,237,1) 0%, rgba(255,255,255,1) 100%)' }}>
        <Box
          sx={{
            background: 'url(/static/mosque.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
          }}
        >
          <Container>
            <Grid container alignItems="center" height="700px">
              <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box
                  backgroundColor="secondary.main"
                  display="inline-block"
                  component={Link}
                  underline="none"
                  href="https://goo.gl/maps/L3VLXWPoHycxiN1R8"
                  target="_blank"
                  rel="noreferrer"
                  borderRadius={1}
                  py={1}
                  px={2}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PinDropOutlined color="primary" fontSize="small" />
                    <Typography variant="body2" color="#000">
                      Perum Bambu Kuning D1/03, Kab. Bogor, Jawa Barat
                    </Typography>
                  </Stack>
                </Box>
                <Typography variant="h2" my={3}>
                  Kelompok Studi Pelajar Muslim (KSPM)
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={5}>
                  Pemerhati dan Pembangun Potensi Pelajar Muslim Berkualitas.
                </Typography>
                <Button variant="contained" size="large">
                  Apa itu KSPM?
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={2} py={12}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Apa itu KSPM?</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi corporis temporibus ea obcaecati? Quia
              necessitatibus non laboriosam fuga? Beatae eius modi quod perferendis voluptate repellendus alias? Ex nemo
              fugit animi?
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {data ? (
        <Box sx={{ background: 'rgba(248,246,237,1)', py: 12 }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography variant="h3">Jadwal Sholat</Typography>
                  <Button variant="outlined" color="primary" component={RouterLink} to="jadwal-sholat">
                    Lihat Semua
                  </Button>
                </Stack>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={1} mb={2}>
                      <Typography variant="h6">{moment().format('dddd, LL')}</Typography>
                      <Typography variant="h6" color="primary.main">
                        ({fDateHijriah()})
                      </Typography>
                    </Stack>
                    <CustomCard name="Subuh" time={data.sholat.subuh} />
                    <CustomCard name="Dzuhur" time={data.sholat.dzuhur} />
                    <CustomCard name="Ashar" time={data.sholat.ashar} />
                    <CustomCard name="Maghrib" time={data.sholat.maghrib} />
                    <CustomCard name="Isya" time={data.sholat.isya} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3} pt={{ xs: 6, md: 0 }}>
                  <Typography variant="h3">Agenda Mendatang</Typography>
                  <Button variant="outlined" color="primary">
                    Lihat Semua
                  </Button>
                </Stack>
                <Card>
                  <CardContent>
                    <Stack alignItems="center" justifyContent="center" mb={11}>
                      <Typography variant="h4">
                        <i>OPINI (Obrolan Pelajar Inspiratif)</i>
                      </Typography>
                      <Avatar
                        alt="Avatar"
                        src="/static/mock-images/avatars/2.jpeg"
                        sx={{ width: 120, height: 120, my: 3 }}
                      />
                      <Typography variant="h5">Ustadz Zaid Muzayyan</Typography>
                      <Typography variant="body1" mb={3}>
                        Founder Club Motor Mengaji
                      </Typography>
                      <Button variant="contained" size="large">
                        Daftar Sekarang
                      </Button>
                    </Stack>
                    {/* <ul style={{ listStyleType: 'none' }}>
                      <li>📆 31 Desember 2022 s/d 1 Januari 2023</li>
                      <li>⏰ 20.00 s/d 09.00 WIB</li>
                      <li>🕌 Masjid Besar At-Taqwa, Perum Graha Kartika Pratama, Bojong Gede.</li>
                    </ul> */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Loading />
      )}
      <Container sx={{ py: 12 }}>
        <Typography variant="h3" align="center" mb={3}>
          Donasi
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{ height: 180 }} image="/static/mock-images/banners/quranuntukparapenghafal.jpeg" />
                <CardContent>
                  <Typography variant="h6">Quran untuk para penghafal</Typography>
                  <LinearProgress variant="determinate" value={10} sx={{ my: 2 }} />
                  <Typography variant="body2">Terkumpul</Typography>
                  <Typography variant="h6">Rp126.635.000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{ height: 180 }} image="/static/mock-images/banners/quranuntukparapenghafal.jpeg" />
                <CardContent>
                  <Typography variant="h6">Quran untuk para penghafal</Typography>
                  <LinearProgress variant="determinate" value={10} sx={{ my: 2 }} />
                  <Typography variant="body2">Terkumpul</Typography>
                  <Typography variant="h6">Rp126.635.000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{ height: 180 }} image="/static/mock-images/banners/quranuntukparapenghafal.jpeg" />
                <CardContent>
                  <Typography variant="h6">Quran untuk para penghafal</Typography>
                  <LinearProgress variant="determinate" value={10} sx={{ my: 2 }} />
                  <Typography variant="body2">Terkumpul</Typography>
                  <Typography variant="h6">Rp126.635.000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{ height: 180 }} image="/static/mock-images/banners/quranuntukparapenghafal.jpeg" />
                <CardContent>
                  <Typography variant="h6">Quran untuk para penghafal</Typography>
                  <LinearProgress variant="determinate" value={10} sx={{ my: 2 }} />
                  <Typography variant="body2">Terkumpul</Typography>
                  <Typography variant="h6">Rp126.635.000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container alignItems="center" justifyContent="center" py={12}>
          <Grid item xs={12} sm={7} textAlign="center">
            <Typography variant="h3" mb={3}>
              Jadilah Anggota Donasi Bulanan KSPM
            </Typography>
            <Typography color="text.secondary" mb={4}>
              Kamu dapat donasi setiap bulan mulai dari Rp10.000 hingga berapapun yang kamu inginkan. Ayo daftar
              keanggotaan sekarang!
            </Typography>
            <Button variant="contained" size="large">
              Daftar Keanggotaan
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
