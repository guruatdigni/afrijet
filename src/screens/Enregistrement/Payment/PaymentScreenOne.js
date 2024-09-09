import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Button, Menu, Divider, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {colors} from '../../../utils/Styles';
import {CustomHeader} from '../../../components/Header/CustomHeader';
import {Dropdown} from 'react-native-paper-dropdown';
import { SvgXml } from 'react-native-svg';
import { PaymentOptions } from '../../../assets/image';
import { useNavigation } from '@react-navigation/native';

export const PaymentScreenOne = () => {
  const Navigation = useNavigation()
  const [countryVisible, setCountryVisible] = useState(false);
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Pays');
  const [selectedPayment, setSelectedPayment] = useState('Mode de paiement');

  const openCountryMenu = () => setCountryVisible(true);
  const closeCountryMenu = () => setCountryVisible(false);

  const openPaymentMenu = () => setPaymentVisible(true);
  const closePaymentMenu = () => setPaymentVisible(false);

  const [pays, setPays] = useState();
  const [mode, setMode] = useState();

  const OPTIONS = [{label: 'Pays', value: 'pays'}];

  const OPTIONS2 = [
    {label: 'Visa', value: 'visa'},
    {label: 'Credit Card', value: 'cd'},
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title={'Paiement'} />
      <View style={styles.container}>
        <Text style={styles.subHeader}>Modes de paiement disponibles</Text>

        {/* Payment icons */}
        <View style={styles.paymentIcons}>
					<Image source={PaymentOptions} />
        </View>

        <View style={{marginVertical: 20}}>
          <Dropdown
            label="Pays"
            placeholder="Pays"
            options={OPTIONS}
						menuContentStyle={{
							backgroundColor: 'white'
						}}
            value={pays}
            mode="outlined"
            onSelect={setPays}
						// inputProps={{
						// 	right:  <TextInput.Icon  icon={'account'}  />,
						// 	}}
          />
        </View>

        <Dropdown
          label="Mode de paiement"
          placeholder="Mode de paiement"
          options={OPTIONS2}
          value={mode}
          mode="outlined"
					menuContentStyle={{
						backgroundColor: 'white'
					}}
          onSelect={setMode}
        />

        {/* <Menu
        visible={paymentVisible}
        onDismiss={closePaymentMenu}
        anchor={
          <Button 
            mode="outlined" 
            icon="wallet" 
            onPress={openPaymentMenu} 
            style={styles.menuButton}>
            {selectedPayment}
          </Button>
        }>
        <Menu.Item onPress={() => setSelectedPayment('Mastercard')} title="Mastercard" />
        <Menu.Item onPress={() => setSelectedPayment('Visa')} title="Visa" />
        <Divider />
        <Menu.Item onPress={() => setSelectedPayment('Paypal')} title="Paypal" />
      </Menu> */}

        {/* Confirm and Cancel buttons */}
        <Button mode="contained" onPress={() => {
          Navigation.navigate('PaymentScreenTwo')
        }} style={styles.button}>
          Confirmer
        </Button>

        {/* Skip Button */}
        <Button
          textColor={colors.Primary}
          mode="outlined"
          onPress={() => console.log('Sauter')}
          style={styles.skipButton}>
          Annuler
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingHorizontal: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  menuButton: {
    marginBottom: 16,
    borderColor: '#ddd',
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.Primary,
    borderRadius: 8,
    paddingVertical: 5,
  },
  skipButton: {
    marginTop: 10,
    color: colors.Primary,
    borderColor: colors.Primary,
    borderRadius: 8,
  },
});
