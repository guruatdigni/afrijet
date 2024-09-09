import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { SvgXml } from 'react-native-svg';
import { bell, logo2, menu } from '../../assets/image';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
	const Navigation = useNavigation()
	return(
		<View style={styles.header}>
			<TouchableOpacity onPress={() => {
				Navigation.toggleDrawer();
			}}>
				<SvgXml xml={menu} />
			</TouchableOpacity>
			<SvgXml xml={logo2} />
			<SvgXml xml={bell} />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
	},
	logo: {
			width: 100,
			height: 30,
			resizeMode: 'contain',
	},
	bookingContainer: {
			padding: 15,
	},
	bookingTitle: {
			fontSize: 22,
			fontWeight: 'bold',
			marginBottom: 5,
	},
})