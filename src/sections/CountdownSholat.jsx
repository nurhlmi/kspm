/* eslint-disable no-nested-ternary */
import { forwardRef, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Skeleton,
  Slide,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  ChevronRightRounded,
  ClearRounded,
  CancelRounded,
  PinDropRounded,
  SearchRounded,
  ExpandMoreRounded,
} from '@mui/icons-material';
import axios from 'axios';
import moment from 'moment';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CountdownSholat(props) {
  // Memformat tanggal
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');

  const [jadwalSholat, setJadwalSholat] = useState();
  const [params, setParams] = useState({
    location: '1204',
    date: moment().format('yyyy/MM/DD'),
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [today, setToday] = useState(Number(dd));
  const [next, setNext] = useState({ name: '', countDown: 0 });

  // Fetch jadwal sholat
  useEffect(() => {
    const apiURL = `https://api.myquran.com/v1/sholat/jadwal/${params.location}/${params.date}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then(({ data }) => {
        delete data.jadwal.tanggal;
        delete data.jadwal.imsak;
        delete data.jadwal.terbit;
        delete data.jadwal.dhuha;
        delete data.jadwal.date;
        //   console.log(data);
        setJadwalSholat(data);
      })
      .catch(() => {
        setJadwalSholat(null);
        setError(true);
        setLoading(false);
      });
  }, [today, params]);

  // Mengatur waktu tanggal, jam, hari ini.
  useEffect(() => {
    const tId = setTimeout(() => {
      // Sholat berikutnya.
      if (jadwalSholat) {
        if (loading) setLoading(false);
        if (jadwalSholat.jadwal) {
          // Mengambil sholat yang waktunya sudah paling dekat
          const times = Object.values(jadwalSholat.jadwal)
            .map((v) => new Date(`${moment().format('yyyy-MM-DD')}T${v}`).getTime())
            .map((v, i) => [Object.keys(jadwalSholat.jadwal)[i], v - Date.now()])
            .sort((a, b) => a[1] - b[1])
            .filter((v) => v[1] > 0);

          // Memperbarui tanggal jika jadwal hari ini sudah selesai
          if (times.length === 0) {
            setToday(Number(dd) + 1);
          }

          // Mengatur countdown
          const distance = times[0][1];
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          //  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Memperbarui info sholat berikutnya
          setNext({
            name: times[0][0],
            countDown: `${hours > 0 ? `${hours} jam` : ''} ${minutes > 0 ? `${minutes} menit` : ''} ${
              hours > 0 || minutes > 0 ? 'menuju' : 'Waktunya sholat'
            }`,
          });
        }
      }
    }, 1000);
    return () => clearTimeout(tId);
  });

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState();
  const getLocation = async () => {
    await axios
      .get(`https://api.myquran.com/v1/sholat/kota/cari/${search.length > 0 ? search : 'aceh'}`)
      .then((res) => {
        //   console.log(res.data.data);
        const value = res.data.data;
        setLocation(value !== undefined ? value : null);
      });
  };

  useEffect(() => {
    setLocation(undefined);
    const timer = setTimeout(() => {
      getLocation(search);
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const [dialog, setDialog] = useState(false);
  const handleDialog = () => {
    setDialog(!dialog);
    if (location === undefined) getLocation();
  };

  return (
    <>
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3} align="center">
              <img src={`/static/theme1/mosque.png`} alt="Ramadhan" />
            </Grid>
            {!loading ? (
              <>
                {!error ? (
                  <Grid item xs>
                    <Typography variant="body2">{next.countDown}</Typography>
                    <Typography variant="h4" textTransform="capitalize" gutterBottom>
                      {next.name}, {jadwalSholat.jadwal[next.name]}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<PinDropRounded color="primary" fontSize="small" />}
                      onClick={handleDialog}
                    >
                      {jadwalSholat.lokasi.toLowerCase()}
                    </Button>
                  </Grid>
                ) : (
                  <Grid item xs>
                    <Typography gutterBottom>Gagal memuat data</Typography>
                    <Button variant="outlined" size="small">
                      Muat ulang
                    </Button>
                  </Grid>
                )}
              </>
            ) : (
              <Grid item xs>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', py: 1, mt: 0.4 }} width="50%" />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        open={dialog}
        onClose={handleDialog}
        TransitionComponent={Transition}
        scroll="paper"
        sx={{ mt: 15 }}
        fullScreen
      >
        <Stack p={2}>
          <Stack direction="row" alignItems="center" spacing={1} mb={1} ml={-1}>
            <IconButton onClick={handleDialog}>
              <ExpandMoreRounded />
            </IconButton>
            <Typography variant="h6">Lokasi</Typography>
          </Stack>
          <TextField
            size="small"
            placeholder="Cari kabupaten/kota"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              ),
              endAdornment: search.length > 0 && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearch('')}>
                    <ClearRounded />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            autoFocus
          />
        </Stack>
        <DialogContent dividers sx={{ p: 0 }}>
          {location !== undefined ? (
            location !== null ? (
              <Card sx={{ borderRadius: 0 }}>
                {location.map(
                  (value, index) =>
                    index < 20 && (
                      <CardActionArea
                        key={index}
                        onClick={() => {
                          handleDialog();
                          setParams({ ...params, location: value.id });
                          setLoading(true);
                        }}
                      >
                        <Stack direction="row" justifyContent="space-between" spacing={2} p={2}>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="body2" textTransform="capitalize">
                              {value.lokasi.toLowerCase()}
                            </Typography>
                          </Stack>
                          <ChevronRightRounded color="action" />
                        </Stack>
                        {index + 1 < location.length && <Divider />}
                      </CardActionArea>
                    )
                )}
              </Card>
            ) : (
              <Stack alignItems="center" justifyContent="center" spacing={1} pt={10}>
                <CancelRounded fontSize="large" />
                <Typography variant="body2">
                  Pencarian "<b>{search}</b>" tidak ditemukan.
                </Typography>
              </Stack>
            )
          ) : (
            <Stack spacing={4} p={2}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </Stack>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
