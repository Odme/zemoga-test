import { createSelector } from 'reselect';

const getPersons = (state) => state.data.votes.persons;
