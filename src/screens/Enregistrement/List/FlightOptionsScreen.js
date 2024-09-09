import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { CustomHeader } from '../../../components/Header/CustomHeader';
import { colors, FONT } from '../../../utils/Styles';

const flightOptions = [
  { id: 1, title: 'FORFAIT XBAG ONLINE', weight: '11 a 23 Kg LBV', description: 'Supplementaire', price: 'EUR230' },
  { id: 2, title: 'FORFAIT XBAG ONLINE', weight: '11 a 23 Kg LBV', description: 'Supplementaire', price: 'EUR230' },
  { id: 3, title: 'FORFAIT XBAG ONLINE', weight: '11 a 23 Kg LBV', description: 'Supplementaire', price: 'EUR230' },
];

export const FlightOptionsScreen = () => {
	const Navigation = useNavigation()
  return (
		<View style={{flex:1}}>
		<CustomHeader title={'Options de vol'}/>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
			<View style={{justifyContent: 'center', alignItems:'center'}}>
				<Text style={styles.subHeaderText}>DEL → CCU</Text>
				<Text style={styles.dateText}>Fri, March 24</Text>
			</View>
        {flightOptions.map(option => (
          <Card key={option.id} style={styles.card}>
            <Card.Content>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text>{option.weight}</Text>
              <Text>{option.description}</Text>
              <Text style={styles.priceText}>{option.price}</Text>
            </Card.Content>
            <View style={styles.cardActions}>
              <Button
                mode="contained"
                buttonColor={colors.Primary}
								style={{borderRadius: 8}}
                onPress={() => {
									Navigation.navigate('FlightSummary')
								}}
              >
                Ajouter
              </Button>
            </View>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Button mode="outlined"  textColor={colors.Primary} onPress={() => console.log('Annuler clicked')} style={styles.cancelButton}>
          Annuler
        </Button>
        <Button
          mode="contained"
          buttonColor={colors.Primary}
          onPress={() => console.log('Continuer clicked')}
          style={styles.continueButton}
        >
          Continuer
        </Button>
      </View>
    </View>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
  },
  scrollView: {
    flexGrow: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
		backgroundColor: 'white',
		marginHorizontal: 5
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 18,
		color: colors.Black,
		fontFamily: FONT.Bold,
    marginTop: 8,
  },
  cardActions: {
    paddingVertical: 16,
		paddingHorizontal: 14,

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
		borderColor: colors.Primary
  },
  continueButton: {
    flex: 1,
    marginLeft: 8,
  },
});

export default FlightOptionsScreen;
