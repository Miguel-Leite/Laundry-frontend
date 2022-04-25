import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './pages/home/Home';
import { User } from './pages/user/User';
import { Auth } from './pages/auth/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user' element={<User />} />
        <Route path='login' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);