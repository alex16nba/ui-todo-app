import { styled } from '@mui/material/styles';

export const LinkWrapper = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(6),
  '& > *': {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
