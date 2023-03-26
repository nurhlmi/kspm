import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { AccountCircleRounded, CrisisAlertRounded, HomeRounded } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function AppBottomNavigation() {
  const { pathname } = window.location;
  const [value, setValue] = useState(pathname);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Beranda"
          icon={<HomeRounded />}
          component={RouterLink}
          value="/app/home"
          to="./home"
        />
        {/* <BottomNavigationAction label="Target" icon={<CrisisAlertRounded />} component={RouterLink} to="./target" /> */}
        <BottomNavigationAction label="Target" icon={<CrisisAlertRounded />} />
        <BottomNavigationAction
          label="Akun"
          icon={<AccountCircleRounded />}
          component={RouterLink}
          value="/app/account"
          to="./account"
        />
      </BottomNavigation>
    </Paper>
  );
}
