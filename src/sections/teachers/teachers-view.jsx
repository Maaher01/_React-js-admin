import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Stack,
  Table,
  Paper,
  Avatar,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';

import Iconify from 'src/components/iconify';
import { API_Link } from 'src/components/api/api';

export default function TeachersView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}teachers/info`);
    setItems(response.data);
  };

  const deleteItems = async (itemId) => {
    try {
      await axios.delete(`${API_Link}teachers/info/${itemId}`);
      getItems();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Teachers</Typography>

        <Button
          component={Link}
          to="/teachers-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Teacher
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Descignation</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.title} </TableCell>
                <TableCell> {item.designation} </TableCell>
                <TableCell> {item.description} </TableCell>
                <TableCell>
                  <Avatar alty={item.url} src={item.url} />
                </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/teachers-update/${item.id}`}
                    variant="contained"
                    color="primary"
                    startIcon={<Iconify icon="mdi:edit" />}
                  />
                  <Button
                    component={Link}
                    sx={{ ml: 1 }}
                    variant="contained"
                    color="error"
                    onClick={() => deleteItems(item.id)}
                    startIcon={<Iconify icon="ic:outline-delete" />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
