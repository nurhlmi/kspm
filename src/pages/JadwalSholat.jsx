/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import Page from '../components/Page';
import Loading from '../components/Loading';

export default function JadwalSholat() {
  const [data, setData] = useState();
  const date = moment().format('L');
  // eslint-disable-next-line no-undef
  const d = date.substr(0, 2);
  const m = date.substr(3, 2);
  const y = date.substr(6, 4);

  const getJadwalSholat = async () => {
    const res = await axios.get(`https://api.myquran.com/v1/sholat/jadwal/1204/${y}/${m}`);
    return res.data.data;
  };

  useEffect(() => {
    Promise.all([getJadwalSholat()]).then((res) => {
      // console.log(res[0]);
      setData(res[0].jadwal);
    });
  }, []);

  return (
    <Page title="Jadwal Sholat">
      <Container>
        <Typography align="center" variant="h3" py={3}>
          Jadwal Sholat
        </Typography>
        {data !== undefined ? (
          <TableContainer component={Card}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tanggal</TableCell>
                  {/* <TableCell align='center'>Imsak</TableCell> */}
                  <TableCell align="center">Subuh</TableCell>
                  {/* <TableCell align='center'>Syuruq</TableCell> */}
                  {/* <TableCell align='center'>Dhuha</TableCell> */}
                  <TableCell align="center">Dzuhur</TableCell>
                  <TableCell align="center">Ashar</TableCell>
                  <TableCell align="center">Maghrib</TableCell>
                  <TableCell align="center">Isya</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, key) =>
                  new Date(row.date).getDate().toString() === d ? (
                    <TableRow key={key} hover selected>
                      <TableCell>
                        <Typography variant="body2" fontWeight="bold" noWrap>
                          {moment(row.date).format('LL')}
                        </Typography>
                      </TableCell>
                      {/* <TableCell align="center">
                        <b>{row.imsak}</b>
                      </TableCell> */}
                      <TableCell align="center">
                        <b>{row.subuh}</b>
                      </TableCell>
                      {/* <TableCell align="center">
                        <b>{row.terbit}</b>
                      </TableCell> */}
                      {/* <TableCell align="center">
                        <b>{row.dhuha}</b>
                      </TableCell> */}
                      <TableCell align="center">
                        <b>{row.dzuhur}</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>{row.ashar}</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>{row.maghrib}</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>{row.isya}</b>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow key={key} hover>
                      <TableCell>
                        <Typography variant="body2" noWrap>
                          {moment(row.date).format('LL')}
                        </Typography>
                      </TableCell>
                      {/* <TableCell align='center'>{row.imsak}</TableCell> */}
                      <TableCell align="center">{row.subuh}</TableCell>
                      {/* <TableCell align='center'>{row.terbit}</TableCell> */}
                      {/* <TableCell align='center'>{row.dhuha}</TableCell> */}
                      <TableCell align="center">{row.dzuhur}</TableCell>
                      <TableCell align="center">{row.ashar}</TableCell>
                      <TableCell align="center">{row.maghrib}</TableCell>
                      <TableCell align="center">{row.isya}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Loading />
        )}
      </Container>
    </Page>
  );
}
