import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {logo} from '../../assets/image'

export const Splash = () => {
	const Navigation = useNavigation()
		useEffect(() => {
			const timer = () => {
				setTimeout(() => {
					Navigation.reset({
						index: 0,
						routes: [{ name: 'Register' }]
					})
				},2000)
			}
			timer()
		},[])
	return(
		<View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
			<SvgXml xml={logo} />
		</View>
	)
}