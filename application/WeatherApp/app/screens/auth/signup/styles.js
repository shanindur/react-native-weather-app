/**
 * WeatherApp
 *
 * SignUp -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */
import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../../util';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
	signUpContainer: {
		flex: 1,
		backgroundColor: colors.white
	},

	signUpView: {
		marginVertical: 25,
		marginHorizontal: 25
	},

	headerText: {
		textAlign: 'center',
		fontSize: 28,
		color: colors.primaryBlue,
		fontWeight: 'bold'
	},

	footerButtonView: {
		height: 80,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row'
	},

	textError: {
		fontSize: fonts.small,
		color: colors.errorRed
	},

	inputView: {
		flexDirection: 'row',
		height: 50,
		marginTop: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.primaryFont
	},

	textInput: {
		marginLeft: 10,
		fontSize: 16,
		color: colors.primaryIcon,
		width: '90%'
	},

	emptySpace: {
		height: 20
	},

	imageSelectView: {
		flexDirection: 'row',
		height: 50,
		marginTop: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.primaryFont
	},

	imageSelectTouchable: {
		flexDirection: 'row',
		width: width - 140
	},

	imageThumbnail: {
		height: 50,
		width: 50
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
		borderColor: colors.primaryFont
	},

	dividerText: {
		alignSelf: 'center',
		color: colors.primaryFont,
		paddingHorizontal: 15
	},
	signInView: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 50
	},

	signInText: {
		color: colors.primaryFont,
		fontSize: 16
	},

	signIn: {
		color: colors.primaryColour,
		fontSize: 16,
		fontWeight: 'bold'
	}
});


export default styles;
