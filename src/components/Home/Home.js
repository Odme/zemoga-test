import { connect } from 'react-redux';

import actions from '../../store/actions';
import { getSplashPerson, getVotePersons } from '../../store/selector';
import HomeView from './HomeView';

const mapStateToProps = (state) => {
  const splashPerson = getSplashPerson(state);
  const votePersons = getVotePersons(state);
  return {
    closingIn: state.votes.closingIn,
    splashPerson,
    votePersons,
  };
};

const mapDispatchToProps = (dispacth) => ({
  resetVote: (id) => dispacth(actions.data.votes.resetVote(id)),
  pushVote: (vote) => dispacth(actions.data.votes.pushVote({ vote })),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
