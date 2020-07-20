export const GET_DATED_DATA = 'FETCH_DATED_DATA';
export const UPDATE_DATED_DATA = 'UPDATE_DATED_DATA';
export const RESET_CROSSFILTER = 'RESET_CROSSFILTER';

const resetCrossfilter = () => ({
  type: RESET_CROSSFILTER,
});

const setGetDatedData = ({ records }) => ({
  type: GET_DATED_DATA,
  payload: { records },
});

const updateDatedData = ({ records }) => ({
  type: UPDATE_DATED_DATA,
  payload: { records },
});

const init = () => (dispatch, getState) => {
};

export default {
  resetCrossfilter,
  init,
  setGetDatedData,
  updateDatedData,
};
