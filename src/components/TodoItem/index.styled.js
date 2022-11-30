import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  '& > svg': {
    color: theme.palette.border.main,
    fontSize: '18px',
  },
}));
