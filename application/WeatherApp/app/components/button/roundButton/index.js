/**
 * Weather App
 *
 * Rounded Button
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import propTypes from 'prop-types';

import styles from './style';
import { colors } from '../../../util';


const RoundButton = props => {
	const {touchableOpacityStyle, addIcon} = styles(props);

	const buttonClick = () => {
		props.onPress();
	};


	return (
		<TouchableOpacity
			isDisable={props.isDisable}
			activeOpacity={0.8}
			onPress={buttonClick}
			style={touchableOpacityStyle}
		>
			<FontAwesome
				name={props.icon}
				size={props.iconSize}
				color={props.iconColor}
			/>
			{(props.addIcon) &&
				<View style={addIcon}>
					<FontAwesome
						color={colors.primaryBlue}
						name="plus"
						size={20}
					/>
				</View>
			}
		</TouchableOpacity>
	);
};

export default RoundButton;


RoundButton.defaultProps = {
	iconColor: colors.primaryIcon,
	backgroundColor: colors.white,
	size: 40,
	iconSize: 20,
	addIcon: false
};

RoundButton.propTypes = {
	onPress: propTypes.func.isRequired,
	icon: propTypes.string.isRequired,
	iconColor: propTypes.string,
	backgroundColor: propTypes.string,
	size: propTypes.number,
	iconSize: propTypes.number,
	addIcon: propTypes.bool,
	isDisable: propTypes.bool
};
