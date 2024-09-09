import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './index';

export const Provider = () => {
	return (
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	)
}