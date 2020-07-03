/**
 * Weather App
 *
 * Profile
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	View,
	Text,
	Modal,
	TouchableOpacity
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Avatar, SquareButton, TextInput } from '../../components';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import {StorageService} from '../../services';
import { Colors } from '../../util';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { SET_SIGN_OUT_STATE } from '../../redux/actions/actionType';

const options = {
	title: 'Select Image',
	storageOptions: {
		skipBackup: true,
		path: 'images'
	},
	quality: 1,
	maxWidth: 200,
	maxHeight: 200
};

const Profile = props => {
	const isFocused = useIsFocused();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [mobile, setMobile] = useState();
	const [proImage, setProImage] = useState();
	const [editModalVisible, setEditModalVisible] = useState(false);

	const dispatch = useDispatch();

	const editProfilePicture = () => {
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				// console.log('User cancelled image picker');
			} else if (response.error) {
				// console.log('ImagePicker Error: ', response.error);
				showMessage({
					message: `${response.error}, Please go to settings and give permission to use device images.`,
					type: 'danger',
					duration: 5000
				});
			} else if (response.customButton) {
				// console.log('User tapped custom button: ', response.customButton);
			} else {
				setProImage(`data:image/webp;base64,${response.data}`);
				saveUser();
			}
		});
	};

	const saveUser = async() => {
		const USER = {
			fname: firstName,
			lname: lastName,
			mobile: mobile,
			profile: proImage
		};
		await StorageService.storeData('USER', USER);

		setEditModalVisible(false);
		showMessage({
			message: 'Your details was saved successfully!',
			type: 'success',
			duration: 5000
		});
		getUserData();

	};

	const getUserData = async() => {
		const user = await StorageService.getData('USER');
		if (user){
			setFirstName(user.fname);
			setLastName(user.lname);
			setMobile(user.mobile);
			setProImage(user.profile);
		}

	};

	useEffect(() => {
		getUserData();
		return () => {
			getUserData();
			saveUser();
		};
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerView}>
				<TouchableOpacity onPress={() => props.navigation.goBack()} style={{width:'90%'}}>
					<Icon color={Colors.primaryColour} name={'arrow-left'} size={20} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {props.navigation.replace('signIn'); dispatch({type: SET_SIGN_OUT_STATE});} }>
					<Text style={styles.signOut}>Logout</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>Profile</Text>
			<ScrollView>
				<View style={styles.photoView}>
					<View style={styles.photoAvatar}>
						<Avatar isEditable={true} clickOnEditProfile={() => editProfilePicture()} size={150} image={proImage}/>
					</View>
				</View>
				<View style={styles.detailView}>
					<View style={styles.nameView}>
						<Text style={styles.text}>{firstName}</Text>
						<View style={styles.span}/>
						<Text style={styles.text}>{lastName}</Text>
					</View>
					<Text style={styles.mobileText}>{mobile}</Text>
				</View>
				<View style={styles.buttonView}>
					<SquareButton onPress={() => setEditModalVisible(true)} rounded={true} text={'Edit'} backgroundColor={Colors.primaryColor} buttonWidth={'30%'} fontColor={Colors.white} fontSize={18} />
				</View>
			</ScrollView>
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={editModalVisible}
			>
				<View style={styles.overlay}>
					<TouchableOpacity
						style={styles.overlayTouchable}
						onPress={() => setEditModalVisible(false)}
					/>
				</View>
				<View style={styles.modalContentWrapper}>
					<View style={[styles.modalContent]}>
						<Text style={styles.title}>Edit User</Text>
					</View>
					<View style={styles.modalDetailContent}>
						<TextInput testID={'firstName'} placeholder={'First Name'} iconName={'user-o'} onChangeText={(value) => setFirstName(value)} value={firstName}/>
						<TextInput testID={'lastName'} placeholder={'Last Name'} iconName={'user-o'} onChangeText={(value) => setLastName(value)} value={lastName}/>
						<TextInput testID={'mobile'} placeholder={'Mobile'} iconName={'phone'} onChangeText={(value) => setMobile(value)} value={mobile}/>
					</View>
					<View style={styles.buttonView}>
						<SquareButton onPress={() => saveUser()} rounded={true} text={'Update'} backgroundColor={Colors.primaryColor} buttonWidth={'50%'} fontColor={Colors.white} fontSize={18} />
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);

};

export default Profile;
