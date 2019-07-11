import { FETCH_LOCATIONS, FETCH_FORECAST, FETCHING_DATA } from '../actions/types';

const initialState = {
	items: [],
	item: {},
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCHING_DATA:
			return {
				...state,
				loading: true,
			}
		case FETCH_LOCATIONS:
			return {
				...state,
				items: action.payload,
				loading: false,
			}
		case FETCH_FORECAST:
			return {
				...state,
				items: action.payload,
				loading: false,
			}
		default:
			return state;
	}
}