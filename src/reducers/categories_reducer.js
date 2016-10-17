import { ADD_CATEGORY, ADD_CATEGORIES, REMOVE_CATEGORY, CLEAR_CATEGORIES } from '../actions/index';

const INITIAL_STATE = { selected: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
				...state,
				selected: [...state.selected, action.category]
			};

		case ADD_CATEGORIES:
      return {
				...state,
				selected: [...state.selected, ...action.categories]
			};

		case REMOVE_CATEGORY:
			return {
				...state,
				selected: state.selected.filter(category => category.name !== action.category.name)
			};
			
		case CLEAR_CATEGORIES:
			return {
				...state,
				selected: []
			};
			
    default:
      return state;
  }
}
