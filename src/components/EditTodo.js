import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTodos } from '../hooks/useTodos';
import { TextField, Button, Container } from '@mui/material';

const EditTodo = () => {
  const { id } = useParams();
  const { getTodo, updateTodo } = useTodos();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(id);
      setTodo(todo);
    };
    fetchTodo();
  }, [id, getTodo]);

  const handleUpdate = () => {
    updateTodo(id, todo);
    navigate('/');
  };

  if (!todo) return <div>Carregando...</div>;

  return (
    <Container className="container">
      <TextField
        label="Título"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descrição"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Atualizar Tarefa
      </Button>
    </Container>
  );
};

export default EditTodo;
