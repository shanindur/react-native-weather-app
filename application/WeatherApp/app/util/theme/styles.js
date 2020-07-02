import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
	shadow: {
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5
	}
});
