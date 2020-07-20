import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components/macro';

import colors from '../../constants/colors';
import { shadeBlend, isDark } from '../../utils';

const scrollbarColor = (theme) => shadeBlend(
  0.16 * (isDark(theme.background) ? 1 : -1),
  theme.background,
);

const appendHeadLink = (id, href) => {
  if (document.getElementById(id)) {
    return;
  }
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

const useImportFont = () => {
  useEffect(() => {
    appendHeadLink(
      'link-lato',
      'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
    );
  }, []);
};

const GlobalStyle = createGlobalStyle`  
  body, html, #root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 15px;
    height: 100vh;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: ${({ scrollWidth }) => scrollWidth}px;
    height: 0px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => scrollbarColor(theme)};
    border-radius: ${({ scrollWidth }) => Math.floor(scrollWidth / 2.0)}px;
  }
`;

GlobalStyle.propTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string.isRequired,
    foreground: PropTypes.string.isRequired,
  }),
  scrollWidth: PropTypes.number,
};

GlobalStyle.defaultProps = {
  theme: {
    background: colors.background,
    foreground: colors.foreground,
  },
  scrollWidth: 5,
};

const PageGlobal = () => {
  useImportFont();
  return <GlobalStyle />;
};

export default PageGlobal;
