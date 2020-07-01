/**
 * Weather App
 *
 * Square Button
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';
import {colors, fonts, appStyle} from '../../../util';

const SquareButton = props => {
	const {touchableOpacityStyle, textStyle} = styles(props);

	const buttonClick = () => {
		props.onPress();
	};

	return (
		<TouchableOpacity
			disabled={props.isDisable}
			activeOpacity={0.8}
			onPress={buttonClick}
			style={[touchableOpacityStyle, props.isDisable ? null : appStyle.shadow]}>
			<Text style={textStyle} numberOfLines={2}>{props.text}</Text>
		</TouchableOpacity>
	);
};

SquareButton.defaultProps = {
	fontColor: colors.primaryFont,
	backgroundColor: colors.primaryColour,
	fontSize: fonts.medium,
	rounded: false,
	buttonWidth: '60%',
	isDisable: false
};

SquareButton.propTypes = {
	isDisable: propTypes.bool,
	text: propTypes.string.isRequired,
	onPress: propTypes.func.isRequired,
	rounded: propTypes.bool,
	fontColor: propTypes.string,
	fontSize: propTypes.number,
	backgroundColor: propTypes.string,
	buttonWidth: propTypes.string,
	borderWidth: propTypes.number,
	borderColor: propTypes.string
};

export default SquareButton;
