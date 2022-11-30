import {
  Box, Checkbox, FormControlLabel,
} from '@mui/material';
import { string, bool, func } from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from './index.styled';

function TodoItem(props) {
  const {
    label, checked, handleChange, handleDelete,
  } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <FormControlLabel control={<Checkbox checked={checked} />} label={label} onChange={handleChange} />
      <IconButton onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

TodoItem.propTypes = {
  label: string.isRequired,
  checked: bool.isRequired,
  handleChange: func.isRequired,
  handleDelete: func.isRequired,
};

export default TodoItem;
