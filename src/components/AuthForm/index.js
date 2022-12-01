import React from 'react';
import { TextField } from '@mui/material';
import {
  bool, func, node, shape, string,
} from 'prop-types';

// Styles
import { FormRoot } from './index.styled';

function AuthForm({
  onChange, hasConfirmation, state, children,
}) {
  return (
    <FormRoot>
      <div>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="standard"
          fullWidth
          value={state.email}
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          value={state.password}
          onChange={onChange}
        />
      </div>
      {hasConfirmation && (
        <>
          <div>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              variant="standard"
              type="password"
              fullWidth
              value={state.confirmPassword}
              onChange={onChange}
            />
          </div>
          <div>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="standard"
              type="text"
              fullWidth
              value={state.name}
              onChange={onChange}
            />
          </div>
        </>
      )}
      {children}
    </FormRoot>
  );
}

AuthForm.propTypes = {
  state: shape({
    email: string.isRequired,
    password: string.isRequired,
    confirmPassword: string,
  }),
  onChange: func.isRequired,
  children: node.isRequired,
  hasConfirmation: bool,
};

AuthForm.defaultProps = {
  state: {
    confirmPassword: '',
  },
  hasConfirmation: false,
};

export default AuthForm;
