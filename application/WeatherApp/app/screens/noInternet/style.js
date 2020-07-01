/**
 * Weather App
 *
 * No Internet Screen -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jun-29
 */
import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../util';

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},

	container: {
		width: '100%',
		height: '40%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.lightGrey
	},

	titleText: {
		fontSize: 5 + fonts.extraLarge,
		color: colors.primaryColour,
		fontWeight: 'bold'
	},

	bodyText: {
		fontSize: fonts.medium,
		color: colors.errorRed
	}
});

export default styles;
