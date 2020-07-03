/**
 * Weather App
 *
 * Profile -> Style
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-Jul-01
 */
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../util';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whi
	},
	headerView: {
		padding: 10,
		width: '90%',
		flexDirection: 'row'
	},
	span: {
		width: '3%'
	},
	title: {
		fontSize: Fonts.xxLarge,
		padding: 10,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	signOut: {
		fontSize: Fonts.extraLarge,
		fontWeight: 'bold',
		color: Colors.primaryColour
	},
	photoView: {
		padding: 10
	},
	photoAvatar: {
		alignItems: 'center'
	},
	detailView: {
		alignItems: 'center',
		marginTop: 10
	},
	nameView: {
		flexDirection: 'row'
	},
	text: {
		fontSize: Fonts.xxLarge,
		fontWeight: 'bold'
	},
	mobileText: {
		fontSize: Fonts.medium,
		color: Colors.grey
	},
	buttonView: {
		alignItems: 'center'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.lightGrey,
		padding: 5,
		marginVertical: 3,
		marginHorizontal: 10
	},
	overlay: {
		flex: 1,
		backgroundColor: Colors.black,
		opacity: 0.7
	},
	overlayTouchable: {
		flex: 1
	},
	modalContentWrapper: {
		height: 300,
		width: '80%',
		backgroundColor: Colors.white,
		alignSelf: 'center',
		top: '30%',
		borderRadius: 20,
		position: 'absolute',
		zIndex: 2,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5
	},
	modalContent: {
		flex: 1,
		alignItems: 'center'
	},
	modalDetailContent: {
		alignItems: 'center',
		marginTop: 30
	}
});

export default styles;