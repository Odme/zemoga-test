import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PageStyle from './components/General/PageStyle';
import LayoutView from './components/Layout/LayoutView';
import colors from './constants/colors';

const App = () => (
  <>
    <PageStyle />
    <BrowserRouter>
      <ThemeProvider theme={colors}>
        <LayoutView />
      </ThemeProvider>
    </BrowserRouter>
  </>
);

export default App;
