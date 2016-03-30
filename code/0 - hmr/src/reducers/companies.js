import {
  GET_COMPANIES_SUCCESSFUL, GET_COMPANIES_FAILURE,
  ADD_COMPANIES_SUCCESSFUL, ADD_COMPANIES_FAILURE
} from '../actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANIES_SUCCESSFUL:
    case ADD_COMPANIES_SUCCESSFUL:
      return action.payload.data;
  }

  return state;
};
