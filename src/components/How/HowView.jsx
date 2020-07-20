import React from 'react';
import NavbarView from '../Navbar/NavbarView';
import colors from '../../constants/colors';

const How = () => (
  <div style={{ backgroundColor: colors.foreground, height: '100%' }}>
    <NavbarView />
    <h1 style={{ color: colors.background }}>
      How It Works, Works!
    </h1>
  </div>
);

export default How;
