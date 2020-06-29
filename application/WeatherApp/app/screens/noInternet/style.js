/**
 * No Internet styles
 *
 * @author       Amil Waduwawara
 * @version      1.0.0 2020-May-02
 * @copyright    Omobio (Pvt.) Ltd., Sri Lanka.
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
		color: colors.primaryBlue,
		fontWeight: 'bold'
	},

	bodyText: {
		fontSize: fonts.medium,
		color: colors.errorRed
	}
});

export default styles;
