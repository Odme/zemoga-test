import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/macro';
import { Card, Col, Row } from 'react-bootstrap';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import VoteProgress from './VoteProgress';
import CoverGradient from './CoverGradient';
import QualifyButton from './QualifyButton';

const Wrapper = styled(Card)`
  border: none;
  border-radius: unset;
`;

const VoteCardImage = styled(Card.Img)`
  border: none;
  border-radius: unset;
`;

const VoteCardContent = styled(Row)`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 2;
  color: ${({ theme }) => theme.background};
  margin: 0;
`;

const Qualify = styled(Col)`
  padding: 0;
`;

const Description = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const VoteOptions = styled.div`
  margin-bottom: 2rem;

  ${QualifyButton} {
    margin-right: .7rem;
  }
`;

const VoteCard = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <CoverGradient deg={15} />
      <VoteCardImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pope_Francis_Korea_Haemi_Castle_19.jpg/1200px-Pope_Francis_Korea_Haemi_Castle_19.jpg" />
      <VoteCardContent theme={themeContext}>
        <Qualify xs={1}>
          <QualifyButton>
            <FontAwesomeIcon icon={faThumbsUp} />
          </QualifyButton>
        </Qualify>
        <Description xs={11}>
          <h1>Kanye West</h1>
          <p>
            <span>1 month ago</span>
            {' in '}
            asdasd
          </p>
          <p>
            Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero.
          </p>
          <VoteOptions>
            <QualifyButton variant="outline-secondary">
              <FontAwesomeIcon icon={faThumbsUp} />
            </QualifyButton>
            <QualifyButton variant="outline-secondary">
              <FontAwesomeIcon icon={faThumbsDown} />
            </QualifyButton>
            <QualifyButton size={{ height: 2.6, width: 8, fontSize: 1 }}> Vote Now </QualifyButton>
          </VoteOptions>
        </Description>
        <VoteProgress
          up={{
            ...VoteProgress.defaultProps.up,
            percent: 36,
            brackgorund: themeContext.success,
            foreground: themeContext.background,
            opacity: 'BF',
            write: {
              ...VoteProgress.defaultProps.up.write,
              text: ' 36%',
              fontSize: 2,
              icon: faThumbsUp,
              justify: 'start',
            },
          }}
          down={{
            ...VoteProgress.defaultProps.down,
            percent: 64,
            brackgorund: themeContext.warning,
            foreground: themeContext.background,
            opacity: 'BF',
            write: {
              ...VoteProgress.defaultProps.down.write,
              text: '64% ',
              fontSize: 2,
              icon: faThumbsDown,
              justify: 'end',
            },
          }}
        />
      </VoteCardContent>
    </Wrapper>
  );
};

VoteCard.propTypes = {

};

export default VoteCard;
