/**
 * Weather App
 *
 * Main
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React, { useEffect, useState, useRef } from 'react';
import {
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	Text,
	Image,
	Dimensions,
	RefreshControl,
	BackHandler,
	Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import { Constants, Colors } from '../../util';
import {Avatar} from '../../components';
import {StorageService} from '../../services';
import axios from 'axios';
import {
	BarChart
} from "react-native-chart-kit";
import Geolocation from '@react-native-community/geolocation';



const Main = props => {
	const dispatch = useDispatch();
	const {isSignedIn} = useSelector(state => state);

	const isFocused = useIsFocused();

	const [ fetchingData, setFetchingData ] = useState(true);
	const [ currentData, setCurrentData ] = useState(null);
	const [ monthlyLabel, setMonthlyLabel ] = useState([]);
	const [ monthlyData, setMonthlyData ] = useState([]);
	const [ proImage, setProImage ] = useState();
	const [ refreshing, setRefreshing ] = useState(false);

	const fetchCurrentData = (lat, lon) => {
		setFetchingData(true);
		axios.get(Constants.CURRENT_URL, {
			params: {
				lat: lat,
				lon: lon,
				appid: Constants.API_KEY[0]
			}
		})
			.then(response => {
				console.log(response.data);
				setCurrentData(response.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setFetchingData(false);
			});
	};

	const fetchMonthData = (lat, lon) => {
		setFetchingData(true);
		axios.get(Constants.MONTHLY_URL, {
			params: {
				lat: lat,
				lon: lon,
				appid: Constants.API_KEY[1]
			}
		})
			.then(response => {
				const label = response.data.list.map(elem => {
					const d = new Date(elem.dt * 1000);
					return d.getDate() + '/' + d.getMonth();
				});
				const data = response.data.list.map(elem => (elem.temp.average - 273.15).toFixed(0));
				setMonthlyLabel(label);
				setMonthlyData(data);
				console.log('monthData', label, data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setFetchingData(false);
			});
	};

	const dataChart = {
		labels: monthlyLabel,
		datasets: [
			{
				data: monthlyData
			}
		]
	};

	const chartConfig = {
		backgroundColor: Colors.primaryColour,
		backgroundGradientFrom: Colors.graphGradientFrom,
		backgroundGradientTo: Colors.primaryColour,
		decimalPlaces: 0, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16
		},
		propsForDots: {
			r: "6",
			strokeWidth: "2",
			stroke: Colors.white
		}
	};

	const getLocation = () => {
		Geolocation.getCurrentPosition((position) => {
			const { coords: { latitude, longitude } } = position;

			fetchCurrentData(latitude, longitude);
			fetchMonthData(latitude, longitude);

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
					onPress: () => getLocation()
				}]
			);
			return;
		}, {
			timeout: 60000,
			maximumAge: 3600000, // Frequent Location capture timeouts with this
			enableHighAccuracy: false // `false` times out in simulators
		});
	};

	const getUserData = async() => {
		const user = await StorageService.getData('USER');
		if (user){
			setProImage(user.profile);
		}

	};

	const onRefresh = () => {
		setRefreshing(true);
		getLocation();
		getUserData();
		setRefreshing(false);
	};

	useEffect(() => {
		if (!isSignedIn){
			props.navigation.replace('signIn');
		} else {
			getLocation();
			getUserData();
		}
		return () => {
			getUserData();
		}
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  contentContainerStyle={styles.headerView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				<TouchableOpacity onPress={() => {props.navigation.navigate('profile');}} style={styles.avatarView}>
					<Avatar size={50} image={proImage}/>
				</TouchableOpacity>
				<Image style={styles.image} source={{uri: `http://openweathermap.org/img/wn/${currentData?.weather[0]?.icon}@2x.png`}}/>
				<Text style={styles.statusText}>{currentData?.weather[0]?.description}</Text>
				{currentData && <Text style={styles.text}>{currentData?.name}, {currentData?.sys?.country}</Text>}
				<Text style={styles.tempText}>{(currentData?.main?.temp - 273.15).toFixed(0)}&deg;C</Text>
				<View style={styles.headerDetailsView}>
					<View style={[styles.headerData, {width: '30%'}]}>
						<Text style={styles.valueText}>{currentData?.main?.pressure}</Text>
						<Text style={styles.text}>Pressure</Text>
					</View>
					<View style={styles.hLine}/>
					<View style={styles.headerData}>
						<Text style={styles.valueText}>{currentData?.wind?.speed}</Text>
						<Text style={styles.text}>Wind Speed</Text>
					</View>
					<View style={styles.hLine}/>
					<View style={styles.headerData}>
						<Text style={styles.valueText}>{currentData?.main?.humidity}</Text>
						<Text style={styles.text}>Humidity</Text>
					</View>
				</View>
			</ScrollView>
			<ScrollView horizontal={true}>
				<BarChart
					style={styles.graph}
					data={dataChart}
					width={30 * 40 + 50}
					height={220}
					yAxisLabel=""
					chartConfig={chartConfig}
					bezier
					verticalLabelRotation={30}
				/>
			</ScrollView>
		</SafeAreaView>
	);

};

export default Main;
