import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  '& > *': {
    padding: theme.spacing(2, 2, 2, 0),
  },
}));

export const Todo = styled(Typography)(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
