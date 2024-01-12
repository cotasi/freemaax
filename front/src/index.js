import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapping from './Wrapping';
import './scss/media.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Wrapping></Wrapping>
  </BrowserRouter>
);
