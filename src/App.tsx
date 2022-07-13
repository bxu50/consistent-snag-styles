import React from 'react';
import ReactDOM from 'react-dom/client';
import { RadioButton } from './components';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RadioButton id='test' name='test' value='test' label='test'/>
  </React.StrictMode>
);