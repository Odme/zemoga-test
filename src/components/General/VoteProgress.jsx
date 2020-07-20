import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../constants/colors';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ size }) => size}rem;
`;

const Bar = styled.div`
  height: 100%;
  width: ${({ config }) => config.percent}%;
  background-color: ${({ config }) => config.brackgorund}${({ config }) => config.opacity};
  color: ${({ config }) => config.foreground};
`;

const PercentDescriptor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ config }) => config.justify};
  font-size: ${({ config }) => config.fontSize}rem;
  font-weight: ${({ config }) => config.weigth};
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
`;

const Text = styled.span`
  margin: 0 .5rem;
`;

const VoteProgress = (props) => {
  const { down, size, up } = props;
  return (
    <Wrapper size={size}>
      <Bar config={up}>
        <PercentDescriptor config={up.write}>
          {up.write.icon ? <FontAwesomeIcon icon={up.write.icon} /> : null}
          <Text>{up.write.text}</Text>
        </PercentDescriptor>
      </Bar>
      <Bar config={down}>
        <PercentDescriptor config={down.write}>
          <Text>{down.write.text}</Text>
          {down.write.icon ? <FontAwesomeIcon icon={down.write.icon} /> : null}
        </PercentDescriptor>
      </Bar>
    </Wrapper>
  );
};

VoteProgress.defaultProps = {
  up: {
    percent: 50,
    brackgorund: colors.foreground,
    foreground: colors.foreground,
    opacity: 66,
    write: {
      text: '',
      icon: null,
      justify: 'end',
      fontSize: 1,
      weigth: 400,
    },
  },
  down: {
    percent: 50,
    brackgorund: colors.background,
    foreground: colors.foreground,
    opacity: 66,
    write: {
      text: '',
      icon: null,
      justify: 'start',
      fontSize: 1,
      weigth: 400,
    },
  },
  size: 4,
};

VoteProgress.propTypes = {
  up: PropTypes.shape({
    percent: PropTypes.number,
    brackgorund: PropTypes.string,
    foreground: PropTypes.string,
    opacity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    write: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.shape({}),
      justify: PropTypes.string,
      fontSize: PropTypes.number,
      weigth: PropTypes.number,
    }),
  }),
  down: PropTypes.shape({
    percent: PropTypes.number,
    brackgorund: PropTypes.string,
    foreground: PropTypes.string,
    opacity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    write: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.shape({}),
      justify: PropTypes.string,
      fontSize: PropTypes.number,
      weigth: PropTypes.number,
    }),
  }),
  size: PropTypes.number,
};

export default VoteProgress;
