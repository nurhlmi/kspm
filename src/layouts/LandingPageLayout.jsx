import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar } from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import Footer from '../sections/Footer';
import Logo from '../components/Logo';

export default function LandingPageLayout() {
  return (
    <Box mt={7}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ boxShadow: 0, backgroundColor: 'rgba(255, 255, 255, .5)', backdropFilter: 'blur(1em)' }}
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 0 }}>
            <IconButton>
              <Logo />
            </IconButton>
            <Stack direction="row" display={{ xs: 'none', md: 'flex' }}>
              <Button variant="link">Beranda</Button>
              <Button variant="link">Tentang</Button>
              <Button variant="link">Agenda</Button>
              <Button variant="link">Kontak</Button>
            </Stack>
            <Button variant="contained" component={RouterLink} to="/app/home">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Footer />
    </Box>
  );
}
