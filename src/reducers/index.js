import { combineReducers } from 'redux';
import CiesReducer from './cies_reducer';
import CategoriesReducer from './categories_reducer';
import TemplatesReducer from './templates_reducer';
import UsersReducer from './users_reducer';
import ClientsReducer from './clients_reducer';
import ImagesReducer from './images_reducer';

const rootReducer = combineReducers({
  cies: CiesReducer,
	categories: CategoriesReducer,
  templates: TemplatesReducer,
  users: UsersReducer,
	clients: ClientsReducer,
	images: ImagesReducer
});

export default rootReducer;
