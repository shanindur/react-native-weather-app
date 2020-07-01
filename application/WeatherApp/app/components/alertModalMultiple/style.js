/**
 * Weather App
 *
 * Alert Modal Multiple -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import { StyleSheet } from 'react-native';
import { colors } from '../../util';

const styles = StyleSheet.create({
	contentWrapper: {
		backgroundColor: colors.white,
		alignSelf: 'center',
		borderRadius: 15,
		width: '90%',
		maxHeight: 200,
		paddingTop: 10
	},
	headingText: {
		paddingTop: 5,
		paddingHorizontal: 15,
		fontSize: 20
	},
	subHeadingText: {
		paddingHorizontal: 15,
		fontSize: 14
	},
	buttonView: {
		paddingHorizontal: 15,
		width: '100%',
		paddingVertical: 10,
		justifyContent: 'space-between'
	},
	button: {
		height: 45,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 18,
		width: '90%'
	}
});

export default styles;
