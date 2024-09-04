import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><TodoList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddTodo /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditTodo /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
