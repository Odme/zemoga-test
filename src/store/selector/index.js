import { createSelector } from 'reselect';

export const getPersons = (state) => state.votes.persons;

export const getSplashPerson = createSelector(
  [getPersons],
  (persons) => (persons.filter((person) => person.splash))[0],
);

export const getVotePersons = createSelector(
  [getPersons],
  (persons) => (persons.filter((person) => !person.splash)),
);

export const getStore = (state) => state.votes;

export const setStoreOnLocalStorage = createSelector(
  [getStore],
  (storage) => localStorage.setItem('votesStorage', JSON.stringify(storage)),
);
