import { Typography } from '@mui/material';
import { func } from 'prop-types';

// Styles
import { Root, Todo } from './index.styled';

// Others
import { COMPLETE_STATUS, INCOMPLETE_STATUS } from '../../constants/general';

function Filters({ handleFilterTodos }) {
  return (
    <Root>
      <Typography fontWeight={500} variant="body2" color="secondary">
        Show:
      </Typography>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos('')}
      >
        All
      </Todo>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos(COMPLETE_STATUS)}
      >
        Completed
      </Todo>

      <Todo
        variant="body2"
        onClick={() => handleFilterTodos(INCOMPLETE_STATUS)}
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
