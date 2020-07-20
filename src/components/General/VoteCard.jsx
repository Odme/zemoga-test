import React, { useContext, useState } from 'react';
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
  margin-bottom: 2rem;
`;

const VoteCardImage = styled(Card.Img)`
  object-fit: cover;
  border: none;
  width: 100%;
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

const Leyend = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  min-height: 68px;
  margin-bottom: .15rem;
`;

const VoteOptions = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  ${QualifyButton} {
    margin-right: .7rem;
  }
`;

const Ago = styled.span`
  font-weight: 700;
`;

const VoteCard = ({ person, resetVote, pushVote }) => {
  const {
    id,
    ago,
    description,
    downVotes,
    imageUrl,
    name,
    section,
    upVotes,
    voted,
  } = person;
  const totalVotes = upVotes + downVotes;
  const upPercent = Math.round((upVotes * 100) / totalVotes);
  const downPercent = Math.round((downVotes * 100) / totalVotes);
  const themeContext = useContext(ThemeContext);
  const [selectedVote, setSelectedVote] = useState('');

  const onClickSelectionVoteHandle = (selected) => {
    setSelectedVote(selected);
  };

  const onClickVoteHandle = () => {
    if (voted) {
      resetVote(id);
    }
    if (selectedVote) {
      pushVote({ id, vote: selectedVote });
      setSelectedVote('');
    }
  };

  return (
    <Wrapper>
      <CoverGradient deg={15} />
      <VoteCardImage height="500px" src={imageUrl} />
      <VoteCardContent theme={themeContext}>
        <Qualify xs={1}>
          <QualifyButton
            size={{ ...QualifyButton.defaultProps.size, fontSize: 1.5 }}
            theme={{
              ...QualifyButton.defaultProps.theme,
              background: upVotes >= downVotes ? themeContext.success : themeContext.warning,
              foreground: themeContext.background,
            }}
            style={{ position: 'absolute', bottom: '170px' }}
            disabled
          >
            <FontAwesomeIcon icon={upVotes >= downVotes ? faThumbsUp : faThumbsDown} />
          </QualifyButton>
        </Qualify>
        <Leyend xs={11}>
          <h1>{name}</h1>
          <p>
            <Ago>{`${ago} ago`}</Ago>
            {` in ${section}`}
          </p>
          <Description>{voted ? 'Thank you for voting!' : description}</Description>
          <VoteOptions>
            {!voted ? (
              <>
                <QualifyButton
                  onClick={() => onClickSelectionVoteHandle('up')}
                  size={{ ...QualifyButton.defaultProps.size, fontSize: 1.5 }}
                  theme={{
                    ...QualifyButton.defaultProps.theme,
                    background: themeContext.success,
                    foreground: themeContext.background,
                  }}
                  selected={selectedVote === 'up'}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </QualifyButton>
                <QualifyButton
                  onClick={() => onClickSelectionVoteHandle('down')}
                  size={{ ...QualifyButton.defaultProps.size, fontSize: 1.5 }}
                  theme={{
                    ...QualifyButton.defaultProps.theme,
                    background: themeContext.warning,
                    foreground: themeContext.background,
                  }}
                  selected={selectedVote === 'down'}
                >
                  <FontAwesomeIcon icon={faThumbsDown} />
                </QualifyButton>
              </>
            ) : null}
            <QualifyButton
              onClick={onClickVoteHandle}
              size={{ ...QualifyButton.defaultProps.size, height: 2.6, width: 8 }}
              theme={{
                ...QualifyButton.defaultProps.theme,
                foreground: themeContext.background,
              }}
              border="2px solid"
            >
              {voted ? 'Vote again' : 'Vote Now'}
            </QualifyButton>
          </VoteOptions>
        </Leyend>
        <VoteProgress
          up={{
            ...VoteProgress.defaultProps.up,
            percent: upPercent,
            brackgorund: themeContext.success,
            foreground: themeContext.background,
            opacity: 'BF',
            write: {
              ...VoteProgress.defaultProps.up.write,
              text: `${upPercent}%`,
              fontSize: 2,
              icon: faThumbsUp,
              justify: 'start',
            },
          }}
          down={{
            ...VoteProgress.defaultProps.down,
            percent: downPercent,
            brackgorund: themeContext.warning,
            foreground: themeContext.background,
            opacity: 'BF',
            write: {
              ...VoteProgress.defaultProps.down.write,
              text: `${downPercent}%`,
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
  person: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    ago: PropTypes.string,
    section: PropTypes.string,
    upVotes: PropTypes.number,
    downVotes: PropTypes.number,
    splash: PropTypes.bool,
    imageUrl: PropTypes.string,
    voted: PropTypes.bool,
  }).isRequired,
  resetVote: PropTypes.func.isRequired,
  pushVote: PropTypes.func.isRequired,
};

export default VoteCard;
