import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinNewForm from './pin_new_form';
import {getCurrentUser} from '../../actions/session_actions';
import {getProfilePage} from '../../actions/user_actions'
const mapStateToProps = ({session}) => {
  return (
    {currentUser: session}
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfilePage: (id) => dispatch(getProfilePage(id)),
  newPin: (pin) => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PinNewForm);
