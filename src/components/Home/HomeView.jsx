import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components/macro';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import NavbarView from '../Navbar/NavbarView';
import VoteProgress from '../General/VoteProgress';
import { shadeBlend } from '../../utils';
import useWindowDimensions from '../../utils/useWindowDimensions';
import windowSizes from '../../constants/windowSizes';
import CoverGradient from '../General/CoverGradient';
import VoteCard from '../General/VoteCard';
import QualifyButton from '../General/QualifyButton';

const HomeCoverImage = styled.section`
  background-image: url(${({ coverImage }) => (coverImage)});
  height: 100%;
  background-size: cover;
  position: relative;
  font-size: 2rem;
`;

const CoverDescription = styled.div`
  position: absolute;
  left: 10%;
  bottom: 100px;
  z-index: 2;
  width: 500px;
  padding: 0 15px;
  color: ${({ foreground }) => foreground};

  @media(max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

const CoverDescriptionBlur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  filter: blur(2px);
  z-index: -1;
`;

const CoverDescriptionLink = styled.a`
  text-decoration: dotted;
  color: inherit;

  &:hover {
    text-decoration: dotted;
    color: inherit;
    filter: contrast(80%);
  }
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

const VotesTitle = styled.h1`
  font-weight: 300;
`;

const HomeAddName = styled(HomeSection)`
  position: relative;

  > div {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &::after {
    content: '';
    background: url('https://image.shutterstock.com/image-photo/crowd-people-shopping-street-260nw-740632564.jpg');
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }

`;

const AddNameText = styled.h2`
  font-weight: 300;
`;

const PointDivider = styled.hr`
  background-image: linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  height: 1px;
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
        <CoverDescription foreground={themeContext.background}>
          <Row style={{ position: 'relative' }}>
            <CoverDescriptionBlur />
            <Col>
              <span style={{ fontSize: '0.9rem' }}>What&apos;s your opinion on</span>
              <h1 style={{ fontSize: '5rem' }}>{`${splashPerson.name}?`}</h1>
              <p style={{ fontSize: '1rem' }}>{splashPerson.description}</p>
              <CoverDescriptionLink style={{ fontSize: '0.9rem' }} href="/">More Informaction</CoverDescriptionLink>
              <h4 style={{ margin: '1rem 0' }}>What&apos;s your veredict?</h4>
            </Col>
            <VoteProgress
              up={{
                ...VoteProgress.defaultProps.up,
                percent: 50,
                brackgorund: themeContext.success,
                foreground: themeContext.background,
                opacity: 'BF',
                write: {
                  ...VoteProgress.defaultProps.up.write,
                  fontSize: 2,
                  icon: faThumbsUp,
                  justify: 'center',
                },
              }}
              down={{
                ...VoteProgress.defaultProps.down,
                percent: 50,
                brackgorund: themeContext.warning,
                foreground: themeContext.background,
                opacity: 'BF',
                write: {
                  ...VoteProgress.defaultProps.down.write,
                  fontSize: 2,
                  icon: faThumbsDown,
                  justify: 'center',
                },
              }}
              size={5}
            />
          </Row>
        </CoverDescription>
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
        <VotesTitle>Votes</VotesTitle>
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
        <HomeAddName>
          <Col xs={12} sm={12} md={9} lg={9}>
            <AddNameText>Is there anyone else there you would want us to add?</AddNameText>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <QualifyButton
              onClick={null}
              size={{
                ...QualifyButton.defaultProps.size,
                height: 2.75,
                width: 10,
                fontSize: 1.2,
              }}
              theme={{
                ...QualifyButton.defaultProps.theme,
              }}
              border="2px solid"
            >
              Submit a Name
            </QualifyButton>
          </Col>
        </HomeAddName>
        <PointDivider />
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
