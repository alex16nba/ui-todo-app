import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { getTodos, markTodoCompleted, markTodoUncompleted } from '../../services/Todos';

// Components
import TodoItem from '../../components/TodoItem';
import ContentLayout from '../../components/ContentLayout';

// Assets
import logo from '../../assets/group.svg';
import Filters from '../../components/Filters';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data?.data);
  };

  const handleChangeUpdateTodo = async (e, todo) => {
    const isChecked = e.target.checked;
    const functionToCall = isChecked ? markTodoCompleted : markTodoUncompleted;
    await functionToCall(todo.id);
    const { data } = await getTodos();
    setTodos(data?.data);
  };

  const handleFilterTodos = (status) => {
    console.log('statis', status);
  };

  const handleTodoChanges = () => {
    console.log('handle add new todo');
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ContentLayout>
      <img src={logo} alt="Logo" />

      <Typography variant="h5" my={3} fontWeight={700}>
        Todo list
      </Typography>

      <TextField
        id="standard-basic"
        label="Add a new todo"
        variant="standard"
        fullWidth
        onChange={handleTodoChanges}
      />

      <Box mt={2}>
        {todos?.length > 0 && todos.map((item) => (
          <TodoItem
            key={`${item.id}`}
            handleChange={(e) => handleChangeUpdateTodo(e, item)}
            label={item?.title}
            checked={item?.status === 'completed'}
          />
        ))}
      </Box>

      <Filters handleFilterTodos={handleFilterTodos} />
    </ContentLayout>
  );
}
