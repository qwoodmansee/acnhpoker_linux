import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function ThemeWrapper() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </React.Fragment>
  );
}

ReactDOM.render(
  <ThemeWrapper />,
  document.getElementById('root')
);
