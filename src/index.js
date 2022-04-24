import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);