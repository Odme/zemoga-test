import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../../utils/useWindowDimensions';
import windowSizes from '../../constants/windowSizes';

const TabBarWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TabOption = styled.li`
  box-sizing: border-box;
  margin-left: 2rem;
  position: relative;
  
  a {
    display: block;
    padding: 5px 10px;
    color: ${({ theme }) => theme.background};
    border-bottom: 2px solid transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`;

const MobileMenuOption = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: 1.5rem;
  cursor: pointer;
`;

const MobileMenuBox = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  padding: 2rem;
  background: ${({ background }) => background};
  z-index: -1;
  transform: translateY(${({ active }) => (active ? 0 : -110)}vh);
  transition: ${({ active }) => (active ? 0.75 : 0.3)}s ease-in-out;
`;

const TabBar = (props) => {
  const { options } = props;
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  let navOptions = options.filter((option) => !option.mobile);
  if (width <= windowSizes.md) {
    navOptions = options.filter((option) => option.mobile);
  }
  const [mobileMenu, setMobileMenu] = useState(false);

  const onClickToggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <TabBarWrapper theme={themeContext}>
      {navOptions.map((option) => {
        const {
          title,
          toPath,
          icon,
          mobile,
        } = option;

        return (
          <TabOption key={title}>
            {!mobile ? (
              <Link
                to={toPath}
              >
                {title}
                {icon ? <FontAwesomeIcon icon={icon} /> : null}
              </Link>
            ) : (
              <MobileMenuOption onClick={onClickToggleMobileMenu}>
                <FontAwesomeIcon icon={mobileMenu ? faTimes : icon} />
                <MobileMenuBox active={mobileMenu} background={themeContext.foreground}>
                  {options.filter((tabOption) => !tabOption.mobile).map((tabOption) => (
                    <Link
                      to={tabOption.toPath}
                    >
                      {tabOption.title}
                      {tabOption.icon ? <FontAwesomeIcon icon={tabOption.icon} /> : null}
                    </Link>
                  ))}
                </MobileMenuBox>
              </MobileMenuOption>
            )}
          </TabOption>
        );
      })}
    </TabBarWrapper>
  );
};

TabBar.defaultProps = {
};

TabBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    toPath: PropTypes.string.isRequired,
    icon: PropTypes.shape({}),
    mobile: PropTypes.bool,
  })).isRequired,
};

export default TabBar;
