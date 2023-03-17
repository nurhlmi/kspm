import { EmailRounded, FacebookRounded, Instagram, PinDropRounded, WhatsApp, YouTube } from '@mui/icons-material';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <Box backgroundColor="primary.darker" color="#9e9e9e" py={10}>
      <Container>
        <Logo />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={5} mb={4}>
            <Typography variant="body1" py={3}>
              Kelompok Studi Pelajar Muslim
            </Typography>
            <Stack spacing={1}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                component={Link}
                href="https://api.whatsapp.com/send?phone=6285106601234"
                target="_blank"
                rel="noreferrer"
                underline="none"
                color="inherit"
              >
                <WhatsApp fontSize="small" />
                <Typography variant="body2">(+62) 851 0660 1234</Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                component={Link}
                href="mailto:kspm.bojonggede@gmail.com"
                underline="none"
                color="inherit"
              >
                <EmailRounded fontSize="small" />
                <Typography variant="body2">kspm.bojonggede@gmail.com</Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                component={Link}
                href="https://goo.gl/maps/L3VLXWPoHycxiN1R8"
                target="_blank"
                rel="noreferrer"
                underline="none"
                color="inherit"
              >
                <PinDropRounded fontSize="small" />
                <Typography variant="body2">Perum Bambu Kuning D1/03, Kab. Bogor, Jawa Barat</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              Tautan
            </Typography>
            <Stack spacing={1} mt={2}>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Beranda
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Tentang
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Agenda
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Donasi
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Berita
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} md>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              Donasi
            </Typography>
            <Stack spacing={1} mt={2}>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Campaign
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Sedekah
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Zakat
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Qurban
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} md>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              Edukasi
            </Typography>
            <Stack spacing={1} mt={2}>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Quran
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Tajwid
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Aqiqah
              </Link>
              <Link underline="none" color="#9e9e9e" component={RouterLink} to="/">
                Ruqyah
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} md>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              Media Sosial
            </Typography>
            <Stack spacing={1} mt={2}>
              <div>
                <Button
                  component={Link}
                  href="https://www.facebook.com/kspmofficial/"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  startIcon={<FacebookRounded fontSize="small" />}
                >
                  Facebook
                </Button>
              </div>
              <div>
                <Button
                  component={Link}
                  href="https://www.instagram.com/kspminfo/"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  startIcon={<Instagram fontSize="small" />}
                >
                  Instagram
                </Button>
              </div>
              <div>
                <Button
                  component={Link}
                  href="https://www.youtube.com/@KSPMOfficial"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  startIcon={<YouTube fontSize="small" />}
                >
                  YouTube
                </Button>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
