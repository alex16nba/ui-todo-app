import {
  createContext, useMemo, useState,
} from 'react';
import { node } from 'prop-types';

const UserContext = createContext({
  user: {},
  todos: [],
  isLoading: false,
});

const UserDispatchContext = createContext({
  setUser: () => {},
  setIsLoading: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const store = useMemo(() => ({
    user,
    isLoading,
  }), [user, isLoading]);

  const actions = useMemo(() => ({
    setUser,
    setIsLoading,
  }), []);

  return (
    <UserContext.Provider value={store}>
      <UserDispatchContext.Provider value={actions}>
        {isLoading
          ? <div>loading...</div>
          : children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: node.isRequired,
};

export {
  UserProvider,
  UserContext,
  UserDispatchContext,
};
