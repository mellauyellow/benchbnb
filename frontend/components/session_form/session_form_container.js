import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: ownProps.location.pathname,
    processForm: (user, type) => {
      const processForm = (type === '/login') ? login : signup;
      dispatch(processForm(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
