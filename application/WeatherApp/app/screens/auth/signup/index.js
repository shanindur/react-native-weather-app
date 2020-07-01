/**
 * Weather App
 *
 * Sign In
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-30
 */
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getUniqueId } from 'react-native-device-info';
import * as yup from 'yup';
import { Formik } from 'formik';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { showMessage } from 'react-native-flash-message';
import RNFetchBlob from 'react-native-fetch-blob';

import { SquareButton, ImageCapture } from '../../../components';
import { colors } from '../../../util';
// import { useStore } from '../../../store';
import styles from './styles';

const SignUp = props => {
	// const { state } = useStore();

	// const { deviceLocation } = state;
	const [image, setImage] = useState('');
	const [openImageCapture, setOpenImageCapture] = useState(false);
	const [creatingUser, setCreatingUser] = useState(false);

	const dataInput = {};

	const validationSchema = yup.object().shape({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string().required('Last name is required'),
		mobileNumber: yup
			.string()
			.matches(/^(?:[0-9] ?){6,15}[0-9]$/, 'Enter a valid phone number')
			.required('Mobile number is required').typeError('You must specify a number'),
		email: yup.string().email('Should be a valid email').required('Email is required'),
		password: yup.string().required('Password is required'),
		passwordConfirmation: yup.string().required('Password confirmation is required').oneOf([yup.ref('password'), null], "Passwords doesn't match")

	});

	const initialValues = {
		firstName: '',
		lastName: '',
		mobileNumber: null,
		email: '',
		password: '',
		confirmPassword: ''
	};

	useEffect(() => {

	}, []);

	const submitData = () => {
		creatingUser(true);
	};


	return (
		<SafeAreaView style={styles.signUpContainer}>
			<ScrollView style={{height: Dimensions.get('screen').height}}>
				<View style={styles.signUpView}>
					<Text style={styles.headerText}>Registration</Text>
					<Formik
						initialValues={initialValues}
						onSubmit={values => submitData({values, image})}
						validationSchema={validationSchema}
					>
						{({
							values,
							handleChange,
							errors,
							setFieldTouched,
							touched,
							setFieldValue,
							isValid,
							handleSubmit
						}) => (
							<>
								<ScrollView keyboardShouldPersistTaps="always">
									<View style={styles.inputView}>
										<FontAwesome
											name="user-o"
											size={20}
											color={colors.primaryBlue}
										/>
										<TextInput
											style={styles.textInput}
											placeholder={'First Name'}
											value={values.firstName}
											returnKeyType="next"
											onChangeText={handleChange('firstName')}
											onBlur={() => setFieldTouched('firstName')}
											onSubmitEditing={() => {
												dataInput.lastName.focus();
											}}
										/>
									</View>
									<Text style={styles.textError}>
										{touched.firstName && errors.firstName && errors.firstName}
									</Text>
									<View style={styles.inputView}>
										<FontAwesome
											name="user-o"
											size={20}
											color={colors.primaryBlue}
										/>
										<TextInput
											ref={input => {
												dataInput.lastName = input;
											}}
											style={styles.textInput}
											placeholder={'Last Name'}
											value={values.lastName}
											returnKeyType="next"
											onChangeText={handleChange('lastName')}
											onBlur={() => setFieldTouched('lastName')}
											onSubmitEditing={() => {
												dataInput.mobileNumber.focus();
											}}
										/>
									</View>
									<Text style={styles.textError}>
										{touched.lastName && errors.lastName && errors.lastName}
									</Text>
									<View style={styles.inputView}>
										<FontAwesome
											name="phone"
											size={20}
											color={colors.primaryBlue}
										/>
										<TextInput
											ref={input => {
												dataInput.mobileNumber = input;
											}}
											keyboardType={'numeric'}
											style={styles.textInput}
											placeholder={'Mobile Number'}
											value={values.mobileNumber}
											returnKeyType="next"
											onChangeText={handleChange('mobileNumber')}
											onBlur={() => setFieldTouched('mobileNumber')}
											onSubmitEditing={() => {
												dataInput.email.focus();
											}}
										/>
									</View>
									<Text style={styles.textError}>
										{touched.mobileNumber && errors.mobileNumber && errors.mobileNumber}
									</Text>
									<View style={styles.inputView}>
										<FontAwesome
											name="envelope-o"
											size={20}
											color={colors.primaryBlue}
										/>
										<TextInput
											ref={input => {
												dataInput.email = input;
											}}
											style={styles.textInput}
											placeholder={'Email'}
											value={values.email}
											returnKeyType="next"
											onChangeText={handleChange('email')}
											onBlur={() => setFieldTouched('email')}
											onSubmitEditing={() => {
												dataInput.password.focus();
											}}
										/>
									</View>
									<Text style={styles.textError}>
										{touched.email && errors.email && errors.email}
									</Text>
									<View style={styles.inputView}>
										<FontAwesome
											name="lock"
											size={26}
											color={colors.primaryBlue}
										/>
										<TextInput
											ref={input => {
												dataInput.password = input;
											}}
											style={styles.textInput}
											placeholder={'Password'}
											value={values.password}
											returnKeyType="next"
											onChangeText={handleChange('password')}
											onBlur={() => setFieldTouched('password')}
										/>
									</View>
									<Text style={styles.textError}>
										{touched.password && errors.password && errors.password}
									</Text>
									<View style={styles.imageSelectView}>
										<TouchableOpacity style={styles.imageSelectTouchable}
											onPress={async() => {
												setOpenImageCapture(true);
											}}
										>
											<MaterialCommunityIcons
												name="camera-iris"
												size={22}
												color={colors.primaryBlue}
											/>
											<Text style={[styles.textInput, {color: '' === image ? colors.primaryFont : colors.primaryIcon}]}>
												{('' === image) ? 'Select profile picture' : 'Selected'}
											</Text>
										</TouchableOpacity>
										{('' !== image) && (
											<Image style={styles.imageThumbnail} source={{uri: image}} />
										)}
									</View>
									<View style={styles.emptySpace}/>
								</ScrollView>
								<View style={styles.footerButtonView}>
									<SquareButton
										isDisable={creatingUser}
										buttonWidth={'40%'}
										onPress={handleSubmit}
										backgroundColor={colors.primaryBlue}
										fontSize={20}
										fontColor={colors.white}
										text={creatingUser ? 'Creating your account...' : 'Register'}
									/>
								</View>
							</>
						)}
					</Formik>
					<ImageCapture
						multiple={false}
						imageList={capture => {
							setImage(capture);
						}}
						triggerImagePicker={openImageCapture}
						onClose={() => setOpenImageCapture(false)}
					/>
				</View>
				<View style={styles.footerView}>
					<View style={styles.signInView}>
						<Text style={styles.signInText}>Already a member? </Text>
						<TouchableOpacity onPress={() => props.navigation.navigate('signin')}>
							<Text style={styles.signIn}>Sign In</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
