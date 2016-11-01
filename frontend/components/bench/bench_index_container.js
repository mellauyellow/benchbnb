import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { requestBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
