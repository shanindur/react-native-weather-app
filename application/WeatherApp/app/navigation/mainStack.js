import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen, ProfileScreen, SignInScreen, SignUpScreen } from '../screens';

const MainStackNav = createStackNavigator();

const MainStack = () => (
	<MainStackNav.Navigator
		initialRouteName= "signIn"
	>
		<MainStackNav.Screen
			options={{
				headerShown: false
			}}
			name="main" component={MainScreen}
		/>
		<MainStackNav.Screen
			options={{
				headerShown: false
			}}
			name="profile" component={ProfileScreen}
		/>
		<MainStackNav.Screen
			options={{
				headerShown: false
			}}
			name="signIn" component={SignInScreen}
		/>
		<MainStackNav.Screen
			options={{
				headerShown: false
			}}
			name="signUp" component={SignUpScreen}
		/>
	</MainStackNav.Navigator>
);

export default MainStack;
