/**
 * Weather App
 *
 * Rounded Button -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import {StyleSheet} from 'react-native';
import {appStyle, colors} from '../../../util';

const styles = styleProps =>
	StyleSheet.create({
		touchableOpacityStyle: {
			backgroundColor: styleProps.backgroundColor,
			borderRadius: 50,
			width: styleProps.size,
			height: styleProps.size,
			alignItems: 'center',
			justifyContent: 'center',
			...appStyle.shadow
		},
		addIcon: {
			position: 'absolute',
			right: -7,
			bottom: -10,
			backgroundColor: colors.lightBlue,
			width: 25,
			height: 25,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 50
		}
	});

export default styles;
