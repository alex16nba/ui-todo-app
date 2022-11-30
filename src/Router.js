import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Todos';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
