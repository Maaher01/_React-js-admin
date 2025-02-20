import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import {
  Paper,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';

import { API_Link } from 'src/components/api/api';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
};

const StyledContainer = styled(Container)(containerStyles);

const paperStyles = {
  width: '80%',
  padding: (theme) => theme.spacing(3),
  borderRadius: (theme) => theme.spacing(1),
  boxShadow: 3,
};

const StyledPaper = styled(Paper)(paperStyles);

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(2),
};

const StyledForm = styled('form')(formStyles);

export default function UserUpdateView() {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_Link}get-user-by-id/${id}`);
        setEmail(response.data.data.email);
        setPassword(response.data.data.password);
        setRole(response.data.data.role);
      } catch (err) {
        console.error('Got an Error ', err);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    if (password.trim() === '' && confirmPassword.trim() === '') {
      setPasswordsMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.trim() !== '' && confirmPassword.trim() !== '' && password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const userData = {
        email,
        role,
      };

      if (password.trim() !== '') {
        userData.password = password;
      }

      await axios.patch(`${API_Link}edit-user-by-id/${id}`, userData);

      navigate('/user');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update User Info
          </Typography>

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Change Password"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm New Password"
            type="password"
            variant="outlined"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!passwordsMatch}
            helperText={!passwordsMatch && "Passwords don't match"}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleRole}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">User</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}
