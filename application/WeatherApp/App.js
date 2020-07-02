/**
 * Weather App
 *
 * Entry point for the app
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */
import React from 'react';
import { StatusBar } from 'react-native';

import { useNetInfo } from './app/hooks/NetInfo';
import {NoInternet, SplashScreen, SignUpScreen, SignInScreen, ProfileScreen, MainScreen} from './app/screens';
import { Provider } from 'react-redux';
import {Store} from './app/redux';
import { Colors } from './app/util';
import FlashMessage from 'react-native-flash-message';
import MainNavigator from './app/navigation/navigator';

const App = () => {
	const netInfo = useNetInfo();

	return (
		<Provider store={Store}>
			<StatusBar backgroundColor={Colors.primaryColour}/>
			{(netInfo.isConnected) ? <MainNavigator /> : <NoInternet />}
			<FlashMessage position="top" />
		</Provider>
	);
};


export default App;
