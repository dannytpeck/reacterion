import { ADD_CIE, REMOVE_CIE, EDIT_CIE, UPDATE_CIE } from '../actions/index';

const INITIAL_STATE = { selected: [], editing: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CIE:
      return { 
				...state, 
				selected: [...state.selected, action.cie] 
			};

    case REMOVE_CIE:
      return { 
				...state, 
				selected: state.selected.filter((cie) => cie.incentive_id !== action.id)
			};
      
    case EDIT_CIE:
      return { 
				...state, 
				editing: action.id 
			};
			
		case UPDATE_CIE:
			return {
				...state,
				selected: state.selected.map((cie) => {
					if (cie.incentive_id === action.cie.incentive_id) {
						return action.cie;
					}
					return cie;
				})
			};
      
    default:
      return state;
  }
}
