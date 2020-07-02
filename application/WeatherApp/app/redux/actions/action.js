import {APP_START, SET_SIGN_IN_STATE, SET_SIGN_OUT_STATE} from './actionType';

export const appStart = (appData) => ({
	type: APP_START,
	payload: appData
});

export const setSignInState  = (loginData) => ({
	type: SET_SIGN_IN_STATE,
	payload: loginData
});

export const setSignOutState  = (logoutData) => ({
	type: SET_SIGN_OUT_STATE,
	payload: logoutData
});
