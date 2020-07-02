/**
 * Weather App
 *
 * Navigator
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-30
 */
import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform, Linking, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './mainStack';
import Geolocation from '@react-native-community/geolocation';
import { SplashScreen } from '../screens';
import { storageService } from '../services';
import {navigationRef} from './rootNavigation';

const Navigator = props => {

	const [ isLoading, setIsLoading ] = useState(true);
	const [ isConnected, setIsConnected ] = useState(false); // TODO: Use of `isConnected`??!!


	const appStart = async() => {
		if ('android' === Platform.OS) {
			const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
			console.log('Android.PERMISSIONS.ACCESS_FINE_LOCATION', permission);

			if (PermissionsAndroid.RESULTS.GRANTED === permission) {
				getAppStartingDetails();
			} else {
				Alert.alert(
					'Warning',
					'Please give permission to use location',
					[{
						text: 'Cancel',
						style: 'cancel',
						onPress: () => BackHandler.exitApp()
					}, {
						text: 'Go to settings',
						onPress: () => Linking.openSettings()
					}]
				);

				return;
			}
		} else {
			getAppStartingDetails();
		}
	};

	const getAppStartingDetails = async () => {
		Geolocation.getCurrentPosition((position) => {
			const { coords: { latitude, longitude } } = position;
			setTimeout(() => {setIsLoading(false);}, 3000);
		}, (err) => {
			console.log(err);
			Alert.alert(
				'',
				'We couldn\'t fetch your location',
				[{
					text: 'Cancel',
					style: 'cancel',
					onPress: () => BackHandler.exitApp()
				}, {
					text: 'Try again',
					onPress: () => appStart()
				}]
			);

			return;
		}, {
			timeout: 60000,
			maximumAge: 3600000, // Frequent Location capture timeouts with this
			enableHighAccuracy: false // `false` times out in simulators
		});
	};



	useEffect(() => {
		setIsLoading(true);
		appStart();
	}, []);


	return (
		<NavigationContainer ref={navigationRef}>
			{isLoading ? <SplashScreen /> : <MainStack />}
		</NavigationContainer>
	);
};

export default Navigator;
