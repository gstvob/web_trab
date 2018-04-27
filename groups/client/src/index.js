import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const M = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
)

ReactDOM.render(<M/>, document.getElementById('root'));
