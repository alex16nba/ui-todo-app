import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: theme.spacing(1, 5),
  '& > *': {
    padding: theme.spacing(2),
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
