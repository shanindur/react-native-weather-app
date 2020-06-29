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
import {NoInternet, SplashScreen} from './app/screens';
import { Provider } from 'react-redux';
import store from './app/store';
import { colors } from './app/util';
import FlashMessage from 'react-native-flash-message';

const App = () => {
	const netInfo = useNetInfo();

	return (
		<Provider store={store}>
			<StatusBar backgroundColor={colors.primaryBlue}/>
			{(netInfo.isConnected) ? <SplashScreen /> : <NoInternet />}
			<FlashMessage position="top" />
		</Provider>
	);
};


export default App;
