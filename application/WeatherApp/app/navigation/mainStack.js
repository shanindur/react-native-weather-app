import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen, SignInScreen, SignUpScreen } from '../screens';
import RightDrawer from './drawerNavigator';

const MainStackNav = createStackNavigator();

const MainStack = () => (
	<MainStackNav.Navigator
		initialRouteName="main"
	>
		<MainStackNav.Screen
			options={{
				headerShown: false
			}}
			name="main" component={RightDrawer}
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
