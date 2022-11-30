import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ContentLayout from '../../components/ContentLayout';
import Title from '../../components/Title';
import AuthForm from '../../components/AuthForm';
import { LinkWrapper } from './index.styled';
import { userLogin } from '../../services/Authentication';
import { UserDispatchContext } from '../../context/UserContext';

export default function Signin() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDispatchContext);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChanges = ({ target: { value, name } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const { data } = await userLogin(state);
      setUser(data.data);
      localStorage.setItem('access_token', data?.data?.token);
      navigate('/');
    } catch (err) {
      setUser({});
    }
  };

  return (
    <ContentLayout>
      <Title
        title="Welcome back!"
        subtitle="Log in to continue."
      />

      <AuthForm
        state={state}
        onChange={handleChanges}
      >
        <div>
          <LinkWrapper>
            <Link to="/signup">
              Don&apos;t have an account? Sign up.
            </Link>
          </LinkWrapper>

          <Button fullWidth variant="contained" onClick={handleLogin}>
            Log in
          </Button>
        </div>
      </AuthForm>
    </ContentLayout>
  );
}
