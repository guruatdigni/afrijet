import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BoardingPass } from '../screens/BoradingPass';
import { EnregistrementList } from '../screens/Enregistrement/List';
import FlightOptionsScreen from '../screens/Enregistrement/List/FlightOptionsScreen';
import FlightSummary from '../screens/Enregistrement/List/FlightSummary';
import { RécapitulatifForm } from '../screens/Enregistrement/List/Form';
import { PaymentScreenOne } from '../screens/Enregistrement/Payment/PaymentScreenOne';
import PaymentScreenTwo from '../screens/Enregistrement/Payment/PaymentScreenTow';
import { Register } from '../screens/Register';
import { Splash } from '../screens/Splash';
import { DrawerNavigation } from './CustomDrawerContent';


export const  Navigation = () => {
	
	const Stack = createStackNavigator()

	return(
			<Stack.Navigator 
			initialRouteName='Splash'
			 screenOptions={{
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
        	  headerShown: false
        }}>
					<Stack.Screen name='Splash' component={Splash}/>
					<Stack.Screen name='Register' component={Register}/>
					<Stack.Screen name='Dashboard' component={DrawerNavigation}/>
					<Stack.Screen name='EnregistrementList' component={EnregistrementList}/>
					<Stack.Screen name='FlightOptionsScreen' component={FlightOptionsScreen}/>
					<Stack.Screen name='FlightSummary' component={FlightSummary}/>
					<Stack.Screen name='RécapitulatifFrom' component={RécapitulatifForm}/>
					<Stack.Screen name='PaymentScreenOne' component={PaymentScreenOne}/>
					<Stack.Screen name='PaymentScreenTwo' component={PaymentScreenTwo}/>
					<Stack.Screen name='BoardingPass' component={BoardingPass}/>
				</Stack.Navigator>
	)
}