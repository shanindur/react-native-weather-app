/**
 * Weather App
 *
 * Main -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../util';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whi
	},
	headerView: {
		backgroundColor: Colors.primaryColour,
		paddingVertical: 30,
		height: Dimensions.get('window').height * 0.68
	},
	title: {
		fontSize: Fonts.xxLarge,
		color: Colors.white,
		padding: 10,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	statusText: {
		fontSize: Fonts.large,
		color: Colors.white,
		fontWeight: 'bold',
		padding: 10,
		textAlign: 'center'
	},
	text: {
		fontSize: Fonts.medium,
		color: Colors.white,
		textAlign: 'center'
	},
	valueText: {
		fontSize: Fonts.xxLarge,
		color: Colors.white,
		textAlign: 'center'
	},
	tempText: {
		fontSize: Fonts.xxxxLarge,
		color: Colors.white,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10
	},
	image: {
		height: 100,
		width: 100,
		alignSelf: 'center'
	},
	avatarView: {
		position: 'absolute',
		alignSelf: 'flex-end',
		padding: 20
	},
	headerDetailsView: {
		flexDirection: 'row',
		marginTop: 30
	},
	headerData: {
		flexDirection: 'column',
		width: '33%'
	},
	buttonView: {
		alignItems: 'center'
	},
	graph: {
		marginTop: 1
	},
	hLine: {
		width: 1,
		height: '100%',
		marginHorizontal: 5,
		backgroundColor: Colors.white
	}
});

export default styles;
