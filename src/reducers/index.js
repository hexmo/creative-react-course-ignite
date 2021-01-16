import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

const initState = {
	userName: '',
	isLogged: false,
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return { ...state };
	}
};

const rootReducer = combineReducers({
	games: gamesReducer,
	user: userReducer,
	detail: detailReducer,
});

export default rootReducer;
