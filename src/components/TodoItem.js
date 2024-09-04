import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useTodos } from '../hooks/useTodos';

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const { deleteTodo } = useTodos();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{todo.title}</Typography>
        <Typography>{todo.description}</Typography>
        <Button onClick={() => navigate(`/edit/${todo.id}`)}>Editar</Button>
        <Button onClick={() => deleteTodo(todo.id)}>Excluir</Button>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
