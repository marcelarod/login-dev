import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';

export default function Routas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teste" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
}
