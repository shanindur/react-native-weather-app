/**
 * WeatherApp
 *
 * SignIn -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../util';

const styles = StyleSheet.create({
	signInContainer: {
		flex: 1,
		backgroundColor: Colors.white
	},

	signInView: {
		marginVertical: 25,
		marginHorizontal: 25
	},

	headerImageView: {
		justifyContent: 'center',
		alignContent: 'center'
	},

	headerImage: {
		width: 130,
		height: 130,
		alignSelf: 'center'
	},

	headerText: {
		textAlign: 'center',
		fontSize: 28,
		color: Colors.black,
		fontWeight: 'bold'
	},

	inputView: {
		flexDirection: 'row',
		height: 50,
		marginTop: 20,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: Colors.primaryFont
	},

	emailInput: {
		marginLeft: 10,
		fontSize: 16,
		color: Colors.primaryIcon,
		width: '90%'
	},

	passwordInput: {
		marginLeft: 10,
		fontSize: 16,
		color: Colors.primaryIcon,
		width: '80%'
	},

	textError: {
		fontSize: Fonts.small,
		color: Colors.errorRed
	},

	passwordShow: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},

	forgetPasswordView: {
		top: 5,
		width: '100%',
		alignItems: 'flex-end'
	},

	loginButton: {
		marginTop: 5
	},

	footerView: {
		marginHorizontal: 25,
		marginBottom: 5
	},

	dividerView: {
		flexDirection: 'row',
		justifyContent: 'center'
	},

	dividerLine: {
		borderBottomWidth: 1,
		width: '30%',
		height: 12,
		borderColor: Colors.primaryFont
	},

	dividerText: {
		alignSelf: 'center',
		color: Colors.primaryFont,
		paddingHorizontal: 15
	},

	socialMediaView: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20
	},

	registerView: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 50
	},

	registerText: {
		color: Colors.primaryFont,
		fontSize: 16
	},

	register: {
		color: Colors.primaryColour,
		fontSize: 16,
		fontWeight: 'bold'
	},

	fullScreenLoaderView: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignContent: 'center',
		position: 'absolute',
		zIndex: 2,
		height: '100%',
		width: '100%'
	}
});


export default styles;
