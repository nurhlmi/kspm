import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBottomNavigation from '../sections/AppBottomNavigation';

export default function LandingPageLayout() {
  return (
    <Box pb={10}>
      <Outlet />
      <AppBottomNavigation />
    </Box>
  );
}
