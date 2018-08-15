import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <CssBaseline>
  	<App />
  </CssBaseline>,
  document.getElementById('root') as HTMLElement
);
