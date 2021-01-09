const initState = {
	popular: [],
	newGames: [],
	upComingGames: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES':
			return {
				...state,
				popular: action.payload.popular,
				newGames: action.payload.new,
				upComingGames: action.payload.upcoming,
			};
		default:
			return { ...state };
	}
};

export default gamesReducer;
