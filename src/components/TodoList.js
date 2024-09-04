import React from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Todo.css';

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <Container className="container">
      <Link to="/add">
        <Button variant="contained" color="primary">
          Adicionar Tarefa
        </Button>
      </Link>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;

