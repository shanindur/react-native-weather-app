/**
 * WeatherApp
 *
 * Splash Screen
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */

import React from 'react';
import {SafeAreaView, ImageBackground } from 'react-native';

const App = () => (
	<SafeAreaView>
		<ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/splash.jpg')}/>
	</SafeAreaView>
);


export default App;
