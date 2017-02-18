import { connect } from 'react-redux';
import { getPin } from '../../actions/pin_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions'
import Pin from './pin';

const mapStateToProps = ({pins}, ownProps) => {
  return {pin: pins}
};

const mapDispatchToProps = (dispatch) => ({
  getPin: (id) => dispatch(getPin(id)),
  createFavorite: (pinId) => dispatch(createFavorite(pinId)),
  deleteFavorite: (pinId) => dispatch(deleteFavorite(pinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Pin);
