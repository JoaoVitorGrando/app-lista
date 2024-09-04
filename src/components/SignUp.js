import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/App.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar conta', error);
    }
  };

  return (
    <Container className="container">
      <Box textAlign="center" mb={4}>
        <Typography variant="h4">Criar Conta</Typography>
      </Box>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignUp}
        fullWidth
        sx={{ mt: 2 }}
      >
        Criar Conta
      </Button>
    </Container>
  );
};

export default SignUp;
