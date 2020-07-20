import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';

const QualifyButton = styled.button`
  height: ${({ size }) => size.height}rem;
  width: ${({ size }) => size.width}rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  border: ${({ border }) => border};
  font-size: ${({ size }) => size.fontSize}rem;
  outline: none;
  ${({ selected }) => (selected ? 'border: 2px solid;' : '')};

  &:hover {
    filter: contrast(90%);
  }

  &:disabled {
    filter: none;
  }

  &:focus {
    outline: none;
  }
`;

QualifyButton.defaultProps = {
  theme: {
    background: 'transparent',
    foreground: colors.foreground,
  },
  size: {
    height: 2.5,
    width: 2.5,
    fontSize: 1,
  },
  border: 'none',
  selected: false,
};

QualifyButton.propTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string,
    foreground: PropTypes.string,
  }),
  size: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    fontSize: PropTypes.number,
  }),
  border: PropTypes.string,
  selected: PropTypes.bool,
};

export default QualifyButton;
