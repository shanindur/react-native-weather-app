/**
 * Weather App
 *
 * Sign In
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-30
 */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';
import { Formik } from 'formik';
// import { useIsFocused } from '@react-navigation/native';

import { SquareButton, RoundButton } from '../../../components';
import { colors, constants } from '../../../util';
import { authService, storageService, userService } from '../../../services';
// import { useStore } from '../../../store';
import styles from './styles';

const SignIn = props => {
	// const { dispatch } = useStore();

	// const { params: { resetPassword} } = props.route;

	const [ showPassword, setShowPassword ] = useState(false);
	const [ userSigningIn, setUserSigningIn ] = useState(false);

	// const isFocused = useIsFocused();

	const dataInput = {};

	// useEffect(() => {
	// 	if (isFocused) {
	// 		console.log('Remove state');
	// 		dispatch({type: 'signOut'});
	// 	}
	// }, [isFocused]);



	// const userSignIn = async values => {
	// 	setUserSigningIn(true);

	// 	const cmToken = await storageService.getData('CM_TOKEN');

	// 	try {
	// 		const response = await authService.userSignIn({
	// 			username: values.email,
	// 			password: values.password,
	// 			cmProvider: cmToken ? cmToken.provider : null,
	// 			cmToken: cmToken ? cmToken.token : null
	// 		});

	// 		// NOTE: Immediately save Auth-token before any other request
	// 		// Wait till storage gets updated
	// 		await storageService.storeData(AUTH, response.data);

	// 		const validUser = await userService.getUserDetails({
	// 			username: values.email
	// 		});

	// 		// Wait till storage gets updated
	// 		await storageService.storeData(USER, validUser.data);

	// 		dispatch({type: 'signingIn', token: response.data, user: validUser.data, isSignedIn: true});

	// 		navigateToHome();
	// 	} catch (exception) {
	// 		showMessage({
	// 			message: exception.error,
	// 			type: 'danger',
	// 			duration: 3000
	// 		});
	// 	} finally {
	// 		setUserSigningIn(false);
	// 	}
	// };

	const userSignIn = (values) => {};

	// const navigateToHome = () => {
	// 	if (resetPassword) {
	// 		props.navigation.replace('main');
	// 	} else {
	// 		dispatch({type: 'REFRESH_DATA', refreshPosts: true});
	// 		props.navigation.goBack();
	// 	}
	// };

	const validationSchema = yup.object().shape({
		email: yup.string().email('Should be a valid email').required('Email is required'),
		password: yup.string().required('Password is required')
	});


	return (
		<SafeAreaView style={styles.signInContainer}>
			<ScrollView style={{height: Dimensions.get('screen').height}}>
				<View style={styles.signInView}>
					<View style={styles.headerImageView}>
						<Image
							source={require('../../../assets/icons/logo.png')}
							style={styles.headerImage}
						/>
						<Text style={styles.headerText}>Weather</Text>
					</View>
					<Formik
						initialValues={{email: '', password: ''}}
						onSubmit={values => userSignIn(values)}
						validationSchema={validationSchema}
					>
						{({
							values,
							handleChange,
							errors,
							setFieldTouched,
							touched,
							isValid,
							handleSubmit
						}) => (
							<>
								<View style={styles.inputView}>
									<MaterialCommunityIcons
										name="email"
										size={20}
										color={colors.primaryBlue}
									/>
									<TextInput
										keyboardType={'email-address'}
										style={styles.emailInput}
										placeholder={'E mail'}
										value={values.email}
										autoCapitalize="none"
										returnKeyType="next"
										onChangeText={handleChange('email')}
										onBlur={() => setFieldTouched('email')}
										onSubmitEditing={() => {
											dataInput.password.focus();
										}}
									/>
								</View>
								<Text style={styles.textError}>{touched.email && errors.email && errors.email}</Text>
								<View style={styles.inputView}>
									<MaterialCommunityIcons
										name="lock"
										size={20}
										color={colors.primaryBlue}
									/>
									<TextInput
										ref={input => {
											dataInput.password = input;
										}}
										secureTextEntry={!showPassword}
										placeholder={'Password'}
										style={styles.passwordInput}
										value={values.password}
										autoCapitalize="none"
										returnKeyType="done"
										onChangeText={handleChange('password')}
										onBlur={() => setFieldTouched('password')}
										onSubmitEditing={handleSubmit}
									/>
									<TouchableOpacity
										style={styles.passwordShow}
										onPress={() => setShowPassword(!showPassword)}
									>
										<MaterialCommunityIcons
											name="eye"
											size={20}
											color={colors.primaryFont}
										/>
									</TouchableOpacity>
								</View>
								<Text style={styles.textError}>{touched.password && errors.password && errors.password}</Text>
								{/* <TouchableOpacity style={styles.forgetPasswordView} onPress={() => props.navigation.navigate('passwordReset')}>
									<Text style={styles.register}>Forgot Password</Text>
								</TouchableOpacity> */}
								<View style={styles.loginButton}>
									<SquareButton
										isDisable={userSigningIn}
										onPress={handleSubmit}
										backgroundColor={colors.primaryBlue}
										fontSize={22}
										fontColor={colors.white}
										text={userSigningIn ? 'Signing in...' : 'Sign in'}
									/>
								</View>
							</>
						)}
					</Formik>
				</View>

				<View style={styles.footerView}>
					<View style={styles.registerView}>
						<Text style={styles.registerText}>Don't have an account? </Text>
						<TouchableOpacity disabled={userSigningIn} onPress={() => props.navigation.navigate('register')}>
							<Text style={styles.register}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};


export default SignIn;
