/**
 * Weather App
 *
 * No Internet Screen
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */
import React from 'react';
import { SafeAreaView, ImageBackground, View, Text } from 'react-native';

import styles from './style';


const NoInternet = () => (
	<SafeAreaView>
		<ImageBackground style={styles.background} source={require('../../assets/images/splash.jpg')}>
			<View style={styles.container}>
				<Text style={styles.titleText}>No internet connection.</Text>
				<Text style={styles.bodyText}>Please restore your Internet connection</Text>
			</View>
		</ImageBackground>
	</SafeAreaView>
);

export default NoInternet;
