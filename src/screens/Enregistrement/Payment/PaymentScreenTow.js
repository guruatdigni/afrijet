import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { devider } from '../../../assets/image';
import { CustomHeader } from '../../../components/Header/CustomHeader';
import { colors, FONT } from '../../../utils/Styles';


const PaymentScreenTwo = () => {
  const Navigation = useNavigation()
  return (
		<View style={{flex:1, backgroundColor: 'white'}}>
      <CustomHeader title={'Paiement'} />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {/* Header Section */}
			<View style={{backgroundColor: 'white', elevation: 5, paddingHorizontal: 20, paddingVertical: 20, borderBottomEndRadius: 8, borderBottomStartRadius: 8}}>
      <View style={styles.header}>
        <Text style={styles.airlineText}>Indigo</Text>
        <View style={styles.headerRight}>
          <Icon name="calendar" size={20} color="black" />
          <Text style={styles.dateText}>15/07/2022</Text>
        </View>
      </View>

      {/* Flight Info */}
      <View style={styles.flightInfo}>
        <View style={styles.timeInfo}>
          <Text style={styles.timeText}>5:50</Text>
          <Text style={styles.locationText}>DEL</Text>
        </View>
        {/* <Icon name="plane" size={24} color="red" /> */}
					<SvgXml xml={devider}/>
        <View style={styles.timeInfo}>
          <Text style={styles.timeText}>7:30</Text>
          <Text style={styles.locationText}>CCU</Text>
        </View>
      </View>

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Totale</Text>
        <Text style={styles.totalPrice}>$230</Text>
      </View>
			</View>

			<View style={{paddingHorizontal: 20}}>
						{/* Card Input Form */}
						<View style={styles.inputContainer}>
							<Text style={styles.label}>Numéro de carte</Text>
							<TextInput  style={styles.input} placeholder="5300 0000 0000 0000" keyboardType="numeric" />

							<Text style={styles.label}>Nom du titulaire</Text>
							<TextInput style={styles.input} placeholder="John Doe" />

							<View style={styles.row}>
								<View style={styles.column}>
									<Text style={styles.label}>CVV</Text>
									<TextInput style={styles.input} placeholder="000" keyboardType="numeric" />
								</View>

								<View style={styles.column}>
									<Text style={styles.label}>Date d'expiration</Text>
									<TextInput style={styles.input} placeholder="05/24" keyboardType="numeric" />
								</View>
							</View>
						</View>

						{/* Confirm and Cancel Buttons */}
						<TouchableOpacity onPress={() => {
              Navigation.navigate('BoardingPass')
            }} style={styles.confirmButton}>
							<Text style={styles.confirmButtonText}>Confirmer</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.cancelButton}>
							<Text style={styles.cancelButtonText}>Annuler</Text>
						</TouchableOpacity>
			</View>
    </ScrollView>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
		marginTop: 20,
		paddingBottom: 90
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  airlineText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    marginLeft: 5,
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  timeInfo: {
    alignItems: 'center',
  },
  timeText: {
    fontSize: 28,
    fontWeight: 'bold',
		color: colors.Text_Black
  },
  locationText: {
    fontSize: 18,
		color: colors.Text_Black
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
		color: colors.Text_Black
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.Primary,
  },
  inputContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
		borderBottomWidth: 0.5,
		borderBottomColor: colors.Text_GRAY
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  confirmButton: {
    backgroundColor: colors.Primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFF',
		fontFamily: FONT.Semibold,
    fontSize: 16,
    // fontWeight: 'bold',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: colors.Primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: colors.Primary,
		fontFamily: FONT.Semibold,
    fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default PaymentScreenTwo;
