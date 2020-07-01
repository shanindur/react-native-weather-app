/**
 * Weather App
 *
 * Image Capture
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import React from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {AlertModalMultiple} from '../../components';
import { colors } from '../../util';

const ImageCapture = ({multiple, crop, imageList, triggerImagePicker, onClose}) => {

	const openImagePicker = type => {
		onClose();
		switch (type) {
			case 'library':
				ImagePicker.openPicker({
					width: 200,
					height: 300,
					multiple: multiple,
					cropping: crop,
					includeBase64: true,
					compressImageQuality: 0.5
				}).then(response => {
					setImage(response);
				}).catch(() => {
					console.log('Cancel Image Picker');
				});
				break;
			case 'camera':
				ImagePicker.openCamera({
					width: 200,
					height: 300,
					includeBase64: true,
					cropping: crop,
					compressImageQuality: 0.5
				}).then(response => {
					imageList(`data:${response.mime};base64,${response.data}`);
				}).catch(() => {
					console.log('Cancel Image Picker');
				});
				break;
			default:
				break;
		}
	};

	const setImage = response => {
		if (multiple) {
			response.forEach(element => {
				imageList(`data:${element.mime};base64,${element.data}`);
			});
		} else {
			imageList(`data:${response.mime};base64,${response.data}`);
		}
	};

	return (
		<View>
			<AlertModalMultiple
				heading={'Select Images'}
				buttons={[
					{id: 1, title: 'Choose From Library', action: () => openImagePicker('library')},
					{id: 2, title: 'Take Photo', action: () => openImagePicker('camera')},
					{id: 3, title: 'Cancel', action: () => onClose(), textColor: colors.errorRed}
				]}
				onCancel={() => onClose()}
				isVisible={triggerImagePicker}
			/>
		</View>
	);
};

export default ImageCapture;
