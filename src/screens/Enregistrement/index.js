import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Header } from '../../components/Header/Header';
import TabSwitcher from '../../components/TabSwitcher';
import { colors } from '../../utils/Styles';

export const Enregistrement = () => {
	const Navigation = useNavigation()
	const tabs = ['Booking Reference', 'Numéro de billet'];
	
	const [referenceNumber, setReferenceNumber] = useState('');
	const [lastName, setLastName] = useState('');


	const handleTabPress = (selectedTab) => {
		console.log('Selected Tab:', selectedTab);
		// Handle the tab change logic here
	};

	const handleRegister = () => {
		// Handle the registration logic here
		Navigation.navigate('EnregistrementList')
		console.log('Reference Number:', referenceNumber);
		console.log('Last Name:', lastName);
	};

	return(
		<View style={styles.container}>
				<Header />
        <ScrollView style={[styles.container, {paddingHorizontal: 12}]}>
					<View style={{marginTop: 10}}>
						<TabSwitcher tabs={tabs} onTabPress={handleTabPress} />
					</View>
					<View style={styles.formContainer}>
						<TextInput
							label="Numéro de référence"
							value={referenceNumber}
							onChangeText={text => setReferenceNumber(text)}
							placeholder="eg. 67y2r3"
							style={styles.input}
							mode='outlined'
							activeOutlineColor={colors.Primary}
						/>
						<TextInput
							label="Nom de famille"
							value={lastName}
							onChangeText={text => setLastName(text)}
							placeholder="eg. Dave"
							style={styles.input}
							mode='outlined'
							activeOutlineColor={colors.Primary}
						/>
						<Button
							mode="contained"
							onPress={handleRegister}
							style={styles.button}
							contentStyle={styles.buttonContent}
							buttonColor={colors.Primary}
						>
							Enregistrement
						</Button>
					</View>
				</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			backgroundColor: '#fff',
	},
	formContainer: {
		padding: 16,
		backgroundColor: '#fff',
		elevation: 5,
		marginTop: 20,
		borderRadius: 10
	},

	input: {
		marginBottom: 16,
	},
	button: {
		marginTop: 16,
		borderRadius: 8
	},
	buttonContent: {
		paddingVertical: 8,
	},
})
