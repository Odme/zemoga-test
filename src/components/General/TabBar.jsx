import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const TabBar = (props) => {
  const { options } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <TabBarWrapper theme={themeContext}>
      {options.map((option) => {
        const {
          title,
          toPath,
          icon,
        } = option;

        return (
          <TabOption key={title}>
            <Link
              to={toPath}
            >
              {title}
              {icon ? <FontAwesomeIcon icon={icon} /> : null}
            </Link>
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
  })).isRequired,
};

export default TabBar;
