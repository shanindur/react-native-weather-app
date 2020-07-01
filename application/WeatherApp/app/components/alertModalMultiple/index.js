/**
 * Weather App
 *
 * Alert Modal Multiple
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './style';
import { colors } from '../../util';

const AlertModalMultiple = ({buttons, heading, subHeading, isVisible, onCancel}) => (
	<Modal
		isVisible={isVisible}
		hasBackdrop={true}
		scrollHorizontal={true}
		useNativeDriver={true}
		avoidKeyboard={true}
		onBackButtonPress={() => {
			onCancel();
		}}
		onBackdropPress={() => {
			onCancel();
		}}
	>
		<View style={styles.contentWrapper}>
			<Text style={styles.headingText} numberOfLines={3}>{heading}</Text>
			{subHeading && (
				<Text style={styles.subHeadingText} numberOfLines={3}>{subHeading}</Text>
			)}
			<View style={styles.buttonView}>
				{
					buttons.map(item => (
						<TouchableOpacity key={item.id} style={styles.button} onPress={() => item.action()}>
							<Text style={[styles.buttonText, {color: item.textColor || colors.primaryBlue}]}>{item.title}</Text>
						</TouchableOpacity>
					))
				}
			</View>
		</View>
	</Modal>
);

AlertModalMultiple.propTypes = {
	isVisible: propTypes.bool.isRequired,
	onCancel: propTypes.func.isRequired
};

export default AlertModalMultiple;
