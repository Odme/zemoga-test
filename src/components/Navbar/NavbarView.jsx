import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

import TabBar from '../General/TabBar';

const BoxContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const NavbarWrapper = styled.nav`
  display: block;
  position: absolute;
  width: 100%;
  height: 200px;
  font-size: 1.2rem;
  z-index: 50;
  color: ${({ theme }) => theme.background};
`;

const NavbarLogo = styled.svg`
  height: 3.6rem;
  font-size: 3rem;
  cursor: pointer;
`;

const TextLogo = styled.text`
  fill: ${({ theme }) => theme.background};
`;

const options = [
  {
    title: 'Past Trials',
    toPath: '/past',
  },
  {
    title: 'How It Works',
    toPath: '/how',
  },
  {
    title: 'Login / Sing Up',
    toPath: '/login',
  },
  {
    title: '',
    toPath: '/search',
    icon: faSearch,
  },
  {
    title: '',
    toPath: '/search',
    icon: faBars,
    mobile: true,
  },
];

const NavbarView = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  return (
    <NavbarWrapper theme={themeContext}>
      <BoxContainer>
        <NavbarLogo onClick={() => history.push('/')}>
          <TextLogo theme={themeContext} x={0} y={35}>Rule of Thumb.</TextLogo>
        </NavbarLogo>
        <TabBar options={options} />
      </BoxContainer>
    </NavbarWrapper>
  );
};

export default NavbarView;
