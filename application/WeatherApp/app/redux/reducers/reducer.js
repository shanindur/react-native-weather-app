import {APP_START, SET_SIGN_IN_STATE, SET_SIGN_OUT_STATE} from '../actions/actionType';

const initialState = {
	isNetworkConnected: false,
	isSignedIn: false,
	user: null,
	deviceLocation: null
};

function Reducer(state = initialState, action) {
	switch (action.type) {
		case APP_START:
			return {
				...state,
				deviceLocation: action.location,
				isNetworkConnected: action.network
			};

		case SET_SIGN_IN_STATE:
			return {
				...state,
				isSignedIn: true,
				user: action.user
			};

		case SET_SIGN_OUT_STATE:
			return {
				...state,
				isSignedIn: false,
				user: action.user
			};

		default:
			return state;
	}
}

export default Reducer;
