import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemesColor } from './ReactContext/Themes.jsx';

ReactDOM.render(
  <ThemesColor>
    <App />
  </ThemesColor>,
  document.getElementById('root')
);
