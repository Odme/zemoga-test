import React from 'react';
import NavbarView from '../Navbar/NavbarView';
import colors from '../../constants/colors';

const Past = () => (
  <div style={{ backgroundColor: colors.foreground, height: '100%' }}>
    <NavbarView />
    <h1 style={{ color: colors.background }}>
      Past Trials, Works!
    </h1>
  </div>
);

export default Past;
