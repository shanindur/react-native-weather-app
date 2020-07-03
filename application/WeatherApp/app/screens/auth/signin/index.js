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
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useIsFocused } from '@react-navigation/native';

import { SquareButton, RoundButton } from '../../../components';
import { Colors, Constants } from '../../../util';
import { StorageService } from '../../../services';
import styles from './styles';
import { SET_SIGN_OUT_STATE, SET_SIGN_IN_STATE } from '../../../redux/actions/actionType';

const SignIn = props => {
	const dispatch = useDispatch();
	const {isSignedIn} = useSelector(state => state);

	const [ showPassword, setShowPassword ] = useState(false);
	const [ userSigningIn, setUserSigningIn ] = useState(false);

	const isFocused = useIsFocused();

	const dataInput = {};

	const userSignIn = async values => {
		setUserSigningIn(true);
		const auth = await StorageService.getData('AUTH');
		if (auth.email === values.email && auth.password === values.password){
			dispatch({type: SET_SIGN_IN_STATE});
			setUserSigningIn(false);
			props.navigation.replace('main');
		} else {
			showMessage({
				message: 'Invalid email and password',
				type: 'danger',
				duration: 5000
			});
			setUserSigningIn(false);
		}
	};

	const validationSchema = yup.object().shape({
		email: yup.string().email('Should be a valid email').required('Email is required'),
		password: yup.string().required('Password is required')
	});

	useEffect(() => {
		if (isFocused) {
			if (isSignedIn){
				props.navigation.replace('main');
			} else {
				console.log('Remove state');
				dispatch({type: SET_SIGN_OUT_STATE});
			}
		}
		return () => {
			userSignIn();
		};
	}, [isFocused]);


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
										color={Colors.primaryBlue}
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
										color={Colors.primaryBlue}
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
											color={Colors.primaryFont}
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
										backgroundColor={Colors.primaryBlue}
										fontSize={22}
										fontColor={Colors.white}
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
						<TouchableOpacity disabled={userSigningIn} onPress={() => props.navigation.navigate('signUp')}>
							<Text style={styles.register}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};


export default SignIn;
