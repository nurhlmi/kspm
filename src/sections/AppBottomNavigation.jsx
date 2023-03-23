import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { AccountCircleRounded, CrisisAlertRounded, HomeRounded } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function AppBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Beranda" icon={<HomeRounded />} component={RouterLink} to="./home" />
        {/* <BottomNavigationAction label="Target" icon={<CrisisAlertRounded />} component={RouterLink} to="./target" /> */}
        <BottomNavigationAction label="Target" icon={<CrisisAlertRounded />} />
        <BottomNavigationAction label="Profil" icon={<AccountCircleRounded />} component={RouterLink} to="./profile" />
      </BottomNavigation>
    </Paper>
  );
}
