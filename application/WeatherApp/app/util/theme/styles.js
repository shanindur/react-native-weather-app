import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
	shadow: {
		shadowColor: colors.shadow,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5
	}
});
