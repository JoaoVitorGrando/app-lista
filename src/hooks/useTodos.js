import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, onSnapshot } from 'firebase/firestore';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const todosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todosList);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (todo) => {
    await addDoc(collection(db, 'todos'), todo);
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const getTodo = async (id) => {
    const docSnap = await getDocs(doc(db, 'todos', id));
    return { id: docSnap.id, ...docSnap.data() };
  };

  const updateTodo = async (id, updatedTodo) => {
    await updateDoc(doc(db, 'todos', id), updatedTodo);
  };

  return { todos, addTodo, deleteTodo, getTodo, updateTodo };
};
