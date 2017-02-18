import {RECEIVE_FAVORITE, DELETE_FAVORITE, GET_FAVORITE} from '../actions/favorite_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  favorited: false
});

const FavoriteReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case GET_FAVORITE:
      debugger;
  }
  
}
