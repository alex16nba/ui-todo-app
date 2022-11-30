import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import {
  createTodo, deleteTodo, getTodos, markTodoCompleted, markTodoUncompleted,
} from '../../services/Todos';

// Components
import TodoItem from '../../components/TodoItem';
import ContentLayout from '../../components/ContentLayout';
import Title from '../../components/Title';
import Filters from '../../components/Filters';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodoValue, setNewTodoValue] = useState('');
  const [statusValue] = useState('');

  const fetchTodos = async () => {
    const { data } = await getTodos({ params: { status: statusValue } });
    setTodos(data?.data);
  };

  const handleChangeUpdateTodo = async (e, todoId) => {
    const isChecked = e.target.checked;
    const functionToCall = isChecked ? markTodoCompleted : markTodoUncompleted;
    await functionToCall(todoId);
    const { data } = await getTodos({ status: statusValue });
    setTodos(data?.data);
  };

  const handleFilterTodos = async (status) => {
    const { data } = await getTodos({ status });
    setTodos(data?.data);
  };

  const handleTodoCreate = async () => {
    if (newTodoValue) {
      await createTodo({ title: newTodoValue });
      const { data } = await getTodos();
      setTodos(data?.data);
      setNewTodoValue('');
    }
  };

  const handleTodoChanges = (e) => {
    setNewTodoValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === '13') {
      handleTodoCreate();
    }
  };

  const handleDeleteTodo = async (e, todoId) => {
    await deleteTodo(todoId);
    const { data } = await getTodos();
    setTodos(data?.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ContentLayout>
      <Title title="Todo list" />

      <TextField
        id="standard-basic"
        label="Add a new todo"
        variant="standard"
        fullWidth
        onBlur={handleTodoCreate}
        onChange={handleTodoChanges}
        onKeyDown={handleKeyDown}
        value={newTodoValue}
      />

      <Box mt={2}>
        {todos?.length > 0 && todos.map((item) => (
          <TodoItem
            key={`${item.id}`}
            handleChange={(e) => handleChangeUpdateTodo(e, item?.id)}
            handleDelete={(e) => handleDeleteTodo(e, item?.id)}
            label={item?.title}
            checked={item?.status === 'completed'}
          />
        ))}
      </Box>

      <Filters handleFilterTodos={handleFilterTodos} />
    </ContentLayout>
  );
}
