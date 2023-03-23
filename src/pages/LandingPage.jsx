/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Button,
  Card,
  //   CardActionArea,
  CardContent,
  //   CardMedia,
  Container,
  Grid,
  //   LinearProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { PinDropOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import HighlightSholat from '../sections/HighlightSholat';

export default function LandingPage() {
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
                    <Typography variant="caption" color="#000">
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
      <Box py={6}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h3">Jadwal Sholat</Typography>
                <Button variant="outlined" color="primary" component={RouterLink} to="jadwal-sholat">
                  Lihat Semua
                </Button>
              </Stack>
              <HighlightSholat />
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <Container sx={{ py: 12 }}>
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
      </Container> */}
    </Page>
  );
}
