import {
  AssignmentRounded,
  ChevronRightRounded,
  ColorLensRounded,
  EditRounded,
  GppMaybeRounded,
  HelpRounded,
  InfoRounded,
  LogoutRounded,
  GroupAddRounded,
  TranslateRounded,
  NotificationsRounded,
} from '@mui/icons-material';
import { Avatar, Box, Card, CardActionArea, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AppPage from '../../components/AppPage';

export default function Account() {
  const menu = [
    {
      child: [
        {
          title: 'Ganti Tema',
          icon: <ColorLensRounded color="action" />,
        },
        {
          title: 'Ganti Bahasa',
          icon: <TranslateRounded color="action" />,
        },
        {
          title: 'Undang Teman',
          icon: <GroupAddRounded color="action" />,
        },
        {
          title: 'Notifikasi',
          icon: <NotificationsRounded color="action" />,
        },
        {
          title: 'Bantuan',
          icon: <HelpRounded color="action" />,
        },
      ],
    },
    {
      child: [
        {
          title: 'Tentang Aplikasi',
          icon: <InfoRounded color="action" />,
        },
        {
          //  title: 'Privacy Policy',
          title: 'Kebijakan Privasi',
          icon: <GppMaybeRounded color="action" />,
        },
        {
          //  title: 'Terms of Service',
          title: 'Persyaratan Layanan',
          icon: <AssignmentRounded color="action" />,
        },
      ],
    },
    {
      child: [
        {
          title: 'Keluar',
          to: '/',
          icon: <LogoutRounded color="action" />,
        },
      ],
    },
  ];

  return (
    <AppPage title="Akun">
      <Container>
        <Stack spacing={3} mt={3}>
          <Card>
            <Stack direction="row" justifyContent="space-between" spacing={2} py={2} pl={2} pr={1}>
              <Stack direction="row" spacing={2}>
                <Avatar />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Nur Hilmi
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    nurhilmi.mail@gmail.com
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <IconButton>
                  <EditRounded fontSize="small" />
                </IconButton>
              </Box>
            </Stack>
          </Card>
          {menu.map((value, index) => (
            <Card key={index}>
              {value.child.map((row, key) => (
                <CardActionArea component={RouterLink} to={row.to} key={key}>
                  <Stack direction="row" justifyContent="space-between" spacing={2} p={2}>
                    <Stack direction="row" spacing={2}>
                      {row.icon}
                      <Typography>{row.title}</Typography>
                    </Stack>
                    <ChevronRightRounded color="action" />
                  </Stack>
                  {key + 1 < value.child.length && <Divider sx={{ ml: 7 }} />}
                </CardActionArea>
              ))}
            </Card>
          ))}
        </Stack>
      </Container>
    </AppPage>
  );
}
