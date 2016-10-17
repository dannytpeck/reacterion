import { FETCH_USERS, SAVE_USER } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload.data };
			
		case SAVE_USER:
			console.log(action.payload);
			return state;

    default:
      return state;
  }
}
