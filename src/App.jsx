import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PageStyle from './components/General/PageStyle';
import Layout from './components/Layout/Layout';
import colors from './constants/colors';

const App = () => (
  <>
    <PageStyle />
    <BrowserRouter>
      <ThemeProvider theme={colors}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </>
);

export default App;
