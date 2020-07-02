/**
 * Weather App
 *
 * Square Button -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import {StyleSheet, Dimensions} from 'react-native';

const styles = stylesProps =>
	StyleSheet.create({
		touchableOpacityStyle: {
			marginVertical: 20,
			minWidth: stylesProps.buttonWidth,
			maxWidth: Dimensions.get('window').width * 0.9,
			paddingHorizontal: 20,
			backgroundColor: stylesProps.backgroundColor,
			borderRadius: stylesProps.rounded ? 50 : 10,
			minHeight: 40,
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: stylesProps.borderWidth,
			borderColor: stylesProps.borderColor
		},
		textStyle: {
			textAlign: 'center',
			color: stylesProps.fontColor,
			fontSize: stylesProps.fontSize
		}
	});

export default styles;
