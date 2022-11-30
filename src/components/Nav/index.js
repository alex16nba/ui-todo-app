import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Root } from './index.styled';
import { UserContext, UserDispatchContext } from '../../context/UserContext';

export default function Nav() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { setUser } = useContext(UserDispatchContext);

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    setUser({});
    navigate('/Signin');
  };

  return (
    <Root>
      {user?.id ? (
        <>
          <div>{user.name}</div>
          <Button onClick={handleLogOut}>Logout</Button>
        </>
      )
        : (
          <>
            <Link to="/signin">
              Signin
            </Link>
            <Link to="/signup">
              Signup
            </Link>
          </>
        )}

    </Root>
  );
}
