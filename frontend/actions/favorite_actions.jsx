import * as ajax_request from '../util/ajax_request';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";

export const createFavorite = pinId => dispatch => (
  ajax_request.favorite(pinId)
  .then((pinId) => dispatch(receiveFavorite(pinId)))
);

export const deleteFavorite = pinId => dispatch => (
  ajax_request.unfavorite(pinId)
  .then((pinId) => dispatch(removeFavorite(pinId)))
)

export const getFavorites = userId => dispatch => (
  ajax_request.getFavorites(userId)
  .then((userId) => dispatch(getFavorites(userId)))
)

const receiveFavorite = pinId => ({
  type: RECEIVE_FAVORITE,
  pinId
})

const removeFavorite = pinId => ({
  type: DELETE_FAVORITE,
  pinId
});

const getFavorite = favorites => ({
  type: GET_FAVORITE,
  favorites
})
