export const PUSH_VOTE = 'PUSH_VOTE';
export const RESET_VOTE = 'RESET_VOTE';
export const RESET_VOTES = 'RESET_VOTES';

const resetVotes = () => ({
  type: RESET_VOTES,
});

const pushVote = ({ vote }) => ({
  type: PUSH_VOTE,
  payload: { vote },
});

const resetVote = (id) => ({
  type: RESET_VOTE,
  payload: { id },
});

const init = () => (dispatch, getState) => {
};

export default {
  resetVotes,
  init,
  pushVote,
  resetVote,
};
