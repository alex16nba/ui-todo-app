import React, { useContext } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

//  Components
import Layout from './components/Layout';

// Containers
import Todos from './containers/Todos';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

// Others
import { UserContext } from './context/UserContext';

export default function Router() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      {user?.id ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Todos />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Signin />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      )}
    </Routes>
  );
}
