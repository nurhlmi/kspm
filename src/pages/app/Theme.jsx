import { useState } from 'react';
import { Button, Stack } from '@mui/material';

export default function Theme() {
  const [theme, setTheme] = useState('theme1');
  return (
    <Stack direction="row" justifyContent="space-between" spacing={1} mb={3}>
      <Button variant="outlined" onClick={() => setTheme('theme')}>
        Tema 1
      </Button>
      <Button variant="outlined" onClick={() => setTheme('theme2')}>
        Tema 2
      </Button>
      <Button variant="outlined" onClick={() => setTheme('theme3')}>
        Tema 3
      </Button>
      <Button variant="outlined" onClick={() => setTheme('theme4')}>
        Tema 4
      </Button>
    </Stack>
  );
}
