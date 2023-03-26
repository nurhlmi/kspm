import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBottomNavigation from '../sections/AppBottomNavigation';

export default function LandingPageLayout() {
  const { pathname } = window.location;
  return (
    <Box pb={10}>
      <Outlet />
      {pathname === '/app/home' && <AppBottomNavigation />}
    </Box>
  );
}
