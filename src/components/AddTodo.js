import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTodo } = useTodos();
  const navigate = useNavigate();

  const handleAdd = () => {
    addTodo({ title, description });
    navigate('/');
  };

  return (
    <Container className="container">
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Adicionar Tarefa
      </Button>
    </Container>
  );
};

export default AddTodo;
