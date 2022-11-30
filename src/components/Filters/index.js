import { Typography } from '@mui/material';

import { func } from 'prop-types';
import { Root, Todo } from './index.styled';

function Filters({ handleFilterTodos }) {
  return (
    <Root>
      <Typography fontWeight={500} variant="body2" color="secondary">
        Show:
      </Typography>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos('all')}
      >
        All
      </Todo>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos('completed')}
      >
        Completed
      </Todo>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos('incompleted')}
      >
        Incompleted
      </Todo>
    </Root>
  );
}

Filters.propTypes = {
  handleFilterTodos: func.isRequired,
};

export default Filters;
