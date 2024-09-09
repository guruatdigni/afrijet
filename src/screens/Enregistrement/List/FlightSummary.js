import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Checkbox, Button, Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { devider } from '../../../assets/image';
import { CustomHeader } from '../../../components/Header/CustomHeader';
import { colors, FONTS_SIZE } from '../../../utils/Styles';

export const FlightSummary = () => {
	const Navigation = useNavigation()
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
		<View style={{flex:1, backgroundColor:'white'}}>
		<CustomHeader title={'Récapitulatif'}/>
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {/* <Card.Content> */}
          <View style={styles.header}>
            <Text style={styles.airline}>Indigo</Text>
          </View>

          <View style={styles.flightInfo}>
            <View>
              <Text style={styles.time}>5:50</Text>
              <Text style={styles.airport}>DEL</Text>
              <Text style={styles.airportName}>Indira Gandhi International Airport</Text>
            </View>
            <View>
							<SvgXml width={90} height={80} xml={devider}/>
              {/* <Text style={styles.duration}>09:30</Text> */}
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.time}>7:30</Text>
              <Text style={styles.airport}>CCU</Text>
              <Text style={[styles.airportName, {textAlign: 'right'}]}>Subhash Chandra Bose International Airport</Text>
            </View>
          </View>

          {/* <View style={styles.details}>
            <Text style={styles.label}>Date de départ</Text>
            <Text style={styles.value}>15/07/2022</Text>
            <Text style={styles.label}>Date d'arrivée</Text>
            <Text style={styles.value}>15/07/2022</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.label}>Classe NO BAG ALLER</Text>
            <Text style={styles.value}>EURO 230</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.label}>Passagers</Text>
            <Text style={styles.value}>Type: Adulte</Text>
            <Text style={styles.value}>Nome: Abd Cde</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.label}>Montant total (XAF)</Text>
            <Text style={styles.value}>XAF 45,730</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.label}>Montant total (EURO)</Text>
            <Text style={styles.value}>EURO 730</Text>
          </View> */}

      </Card>
			<View style={{marginTop: 20}}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => setChecked1(!checked1)}
            />
            <Text style={styles.checkboxText}>J'ai lu et j'accepte les conditions liées à ce prix</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => setChecked2(!checked2)}
            />
            <Text style={styles.checkboxText}>J'ai lu et accepté cette politique d'annulation</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => setChecked3(!checked3)}
            />
            <Text style={styles.checkboxText}>J'ai lu et j'accepte les conditions liées au COVID-19</Text>
          </View>
			</View>
		<View style={styles.footer}>
        <Button mode="outlined"  textColor={colors.Primary} onPress={() => console.log('Annuler clicked')} style={styles.cancelButton}>
          Annuler
        </Button>
        <Button
          mode="contained"
          buttonColor={colors.Primary}
          onPress={() =>  {
						Navigation.navigate("RécapitulatifFrom")
					}}
          style={styles.continueButton}
        >
          Continuer
        </Button>
      </View>
    </ScrollView>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
		backgroundColor: 'white'
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  airline: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  time: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  airport: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  airportName: {
    fontSize: FONTS_SIZE.small,
    color: '#777',
		width: 120,
  },
  duration: {
    fontSize: 16,
    textAlign: 'center',
  },
  details: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
	footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
		borderColor: colors.Primary,
		borderRadius: 8
  },
  continueButton: {
    flex: 1,
    marginLeft: 8,
		borderRadius: 8
  },
});

export default FlightSummary;
