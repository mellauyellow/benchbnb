import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions';

const _nullState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newSession = merge({}, state);
      newSession.currentUser = action.currentUser;
      newSession.errors = [];
      return newSession;
    case RECEIVE_ERRORS:
      newSession = merge({}, state);
      newSession.currentUser = null;
      newSession.errors = action.errors;
      return newSession;
    case LOGOUT:
      return _nullState;
    default:
      return _nullState;
  }
};

export default SessionReducer;
