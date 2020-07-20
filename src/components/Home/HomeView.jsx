import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/macro';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import NavbarView from '../Navbar/NavbarView';
import VoteProgress from '../General/VoteProgress';
import { shadeBlend } from '../../utils';
import useWindowDimensions from '../../utils/useWindowDimensions';
import windowSizes from '../../constants/windowSizes';
import CoverGradient from '../General/CoverGradient';
import VoteCard from '../General/VoteCard';

const HomeCoverImage = styled.section`
  background-image: url(${({ coverImage }) => (coverImage)});
  height: 100%;
  background-size: cover;
  position: relative;
  font-size: 2rem;
`;

const HomeVote = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const HomeSection = styled(Row)`
  margin: 3rem 0;
`;

const HomeMesage = styled(HomeSection)`
  margin: 3rem 0;
  padding: 1rem 0;
  background-color: ${({ background }) => shadeBlend(0.7, background)};

  > div:nth-child(2n) {
    display: flex;
    align-items: center;
  }
`;

const CloseMessage = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeView = (props) => {
  const {
    closingIn,
    splashPerson,
    votePersons,
    resetVote,
    pushVote,
  } = props;
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  return (
    <>
      <HomeCoverImage coverImage={splashPerson.imageUrl}>
        <NavbarView />
        <CoverGradient />
        <HomeVote>
          <VoteProgress
            up={{
              ...VoteProgress.defaultProps.up,
              percent: 25,
              foreground: themeContext.background,
              opacity: 33,
              write: {
                ...VoteProgress.defaultProps.up.write,
                text: 'CLOSING IN',
                weigth: 700,
              },
            }}
            down={{
              ...VoteProgress.defaultProps.down,
              percent: 75,
              write: {
                ...VoteProgress.defaultProps.down.write,
                text: closingIn,
                fontSize: 2.5,
              },
            }}
          />
        </HomeVote>
      </HomeCoverImage>
      <Container>
        <HomeMesage background={themeContext.highlight}>
          <Col xs={10} sm={11} md={4} lg={3}>
            <div style={{ fontSize: '1.25rem', fontWeight: 300 }}>Speak out. Be Heard.</div>
            <div style={{ fontSize: '2.15rem', fontWeight: 700 }}>Be counted</div>
          </Col>
          {width <= windowSizes.sm ? (
            <CloseMessage xs={2} sm={1} md={1} lg={1}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseMessage>
          ) : null}
          <Col sm={12} md={7} lg={8}>
            Rule of Thumb is a crowd sourced court of public opinion
            where anyone and everyone can speak out and speak freely.
            It&apos;s easy: You share your opinion, we analyze and put the
            data in a public report.
          </Col>
          {width > windowSizes.sm ? (
            <CloseMessage md={1} lg={1}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseMessage>
          ) : null}
        </HomeMesage>
        <h1 style={{ fontWeight: 300 }}>Votes</h1>
        <HomeSection>
          {votePersons.map((person) => (
            <Col
              key={person.id}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ padding: (width <= windowSizes.sm) ? 0 : null }}
            >
              <VoteCard
                person={person}
                resetVote={resetVote}
                pushVote={pushVote}
              />
            </Col>
          ))}
        </HomeSection>
      </Container>
    </>
  );
};

HomeView.propTypes = {
  closingIn: PropTypes.string.isRequired,
  splashPerson: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    ago: PropTypes.string,
    section: PropTypes.string,
    upVotes: PropTypes.number,
    downVotes: PropTypes.number,
    splash: PropTypes.bool,
    imageUrl: PropTypes.string,
  }).isRequired,
  votePersons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    ago: PropTypes.string,
    section: PropTypes.string,
    upVotes: PropTypes.number,
    downVotes: PropTypes.number,
    splash: PropTypes.bool,
    imageUrl: PropTypes.string,
  })).isRequired,
  resetVote: PropTypes.func.isRequired,
  pushVote: PropTypes.func.isRequired,
};

export default HomeView;
