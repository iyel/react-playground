import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './category/category.reducer';
import locations from './locations/locations.reducer';
import storage from './storage/storage.reducer';

const rootReducer = combineReducers({
	categories,
  locations,
  storage,
	routing: routerReducer,
});

export default rootReducer;
