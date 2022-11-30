import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContentLayout from '../../components/ContentLayout';
import Title from '../../components/Title';
import AuthForm from '../../components/AuthForm';
import { userRegistration } from '../../services/Authentication';
import { UserDispatchContext } from '../../context/UserContext';

export default function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDispatchContext);

  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleChanges = ({ target: { value, name } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      const { data } = await userRegistration(state);
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
        hasConfirmation
      >

        <div>
          <Button fullWidth variant="contained" onClick={handleRegistration}>
            Sign up
          </Button>
        </div>
      </AuthForm>
    </ContentLayout>
  );
}
