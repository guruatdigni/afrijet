import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Card, Divider, IconButton } from 'react-native-paper';
import { CustomHeader } from '../../../components/Header/CustomHeader';
import IconNB from '../../../components/Icon/IconNB';
import { colors } from '../../../utils/Styles';
import { SelectableDateComponent } from './DateComponet';

const flightData = [
  {
    id: 1,
    flightNumber: 'IN 230',
    airline: 'Indigo',
    departureTime: '5:50',
    arrivalTime: '7:30',
    departureLocation: 'DEL (Delhi)',
    arrivalLocation: 'CCU (Kolkata)',
    miles: '781 miles',
    duration: '01 hr 40min',
    price: 'EUR 230',
  },
  // Add more flight data as needed
];

export const EnregistrementList = () => {
	const Navigation = useNavigation()
  return (
		<View>
		<CustomHeader title={'DEL ➞ CCU'}/>
    <ScrollView style={{backgroundColor: '#F9FBFA'}}>
			<SelectableDateComponent />
      <View style={{ padding: 16 }}>
        {flightData.map((flight) => (
          <Card key={flight.id} style={{ marginBottom: 16 }}>
            <Card.Content>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>{flight.airline}</Text>
                <Text>{flight.flightNumber}</Text>
              </View>
              <Divider style={{ marginVertical: 8 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>{flight.departureTime}</Text>
								<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
										<View style={{height:1, width: 90, backgroundColor: colors.Text_GRAY}}/>
                		<IconButton containerColor='red' iconColor='white' icon="airplane" size={20} />
										<View style={{height:1, width: 90, backgroundColor: colors.Text_GRAY}}/>
								</View>
                <Text>{flight.arrivalTime}</Text>
              </View>
              <Text>{flight.departureLocation} → {flight.arrivalLocation}</Text>
              <Text style={{ marginVertical: 8 }}>{flight.duration}</Text>
              <Text>Earn up to {flight.miles}</Text>
              <Divider style={{ marginVertical: 8 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Classe affaire</Text>
                <Text>Depuis {flight.price}</Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => {
									Navigation.navigate('FlightOptionsScreen')
							}} buttonColor={colors.Primary} mode="contained" style={{ flex: 1, borderRadius: 8 }}>Sélectionner</Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
		</View>
  );
};
