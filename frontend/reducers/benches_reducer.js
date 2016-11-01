import { RECEIVE_BENCHES } from '../actions/bench_actions';
import { merge } from 'lodash';

const BenchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default BenchesReducer;
