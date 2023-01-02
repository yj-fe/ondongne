import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'
import store from './store';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
