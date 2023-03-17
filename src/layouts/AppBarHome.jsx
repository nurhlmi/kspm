import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer';
import Logo from '../components/Logo';

export default function AppBarHome() {
  return (
    <Box mt={8}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ boxShadow: 0, backgroundColor: 'rgba(255, 255, 255, .5)', backdropFilter: 'blur(1em)' }}
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton>
              <Logo />
            </IconButton>
            <Stack direction="row">
              <Button variant="link">Beranda</Button>
              <Button variant="link">Tentang</Button>
              <Button variant="link">Agenda</Button>
              <Button variant="link">Donasi</Button>
              <Button variant="link">Berita</Button>
              <Button variant="link">Kontak</Button>
            </Stack>
            <Button variant="contained">Donasi</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Footer />
    </Box>
  );
}
