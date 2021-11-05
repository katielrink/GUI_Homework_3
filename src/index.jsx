import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { app } from './app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  app(),
  document.getElementById('root')
);