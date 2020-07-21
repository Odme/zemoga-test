export const PUSH_VOTE = 'PUSH_VOTE';
export const RESET_VOTE = 'RESET_VOTE';
export const RESET_VOTES = 'RESET_VOTES';
export const SET_STATE_VOTES = 'SET_STATE_VOTES';

const resetVotes = () => ({
  type: RESET_VOTES,
});

const setStateFromStorage = ({ state }) => ({
  type: SET_STATE_VOTES,
  payload: { state },
});

const pushVote = ({ vote }) => ({
  type: PUSH_VOTE,
  payload: { vote },
});

const resetVote = (id) => ({
  type: RESET_VOTE,
  payload: { id },
});

const init = () => (dispatch) => {
  const store = localStorage.getItem('votesStorage');
  if (store) {
    dispatch(setStateFromStorage({ state: JSON.parse(store) }));
  }
};

export default {
  resetVotes,
  init,
  pushVote,
  resetVote,
};
