import { styled } from '@mui/material/styles';

export const FormRoot = styled('form')(({ theme }) => ({
  '& > *': {
    paddingBottom: theme.spacing(3),
  },
}));
