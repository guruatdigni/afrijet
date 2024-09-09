import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Menu, Provider, Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, FONT } from '../../../../utils/Styles';
import { CustomHeader } from '../../../../components/Header/CustomHeader';
import { useNavigation } from '@react-navigation/native';

export const RécapitulatifForm = () => {
  const Navigaiton = useNavigation()
  const [civility, setCivility] = useState('');
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [idType, setIdType] = useState('Passport');
  const [idNumber, setIdNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [country, setCountry] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDobPicker, setShowDobPicker] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const [countryMenuVisible, setCountryMenuVisible] = useState(false);

  return (
		<View style={{flex:1, backgroundColor: 'white'}}>
				<CustomHeader title={'Information voyageur'}/>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Adulte 1</Text>

          {/* Civility */}
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <TextInput
                mode="outlined"
                label="Civilité"
                value={civility}
                onFocus={() => setMenuVisible(true)}
                left={<TextInput.Icon icon={() => <Icon name="account" size={20} />} />}
                style={styles.input}
              />
            }
          >
            <Menu.Item onPress={() => setCivility('Mr')} title="Mr" />
            <Menu.Item onPress={() => setCivility('Ms')} title="Ms" />
            <Menu.Item onPress={() => setCivility('Mme')} title="Mme" />
          </Menu>

          {/* Name */}
          <TextInput
            mode="outlined"
            label="Nom"
            value={name}
            onChangeText={setName}
            left={<TextInput.Icon icon={() => <Icon name="account" size={20} />} />}
            style={styles.input}
          />

          {/* First Name */}
          <TextInput
            mode="outlined"
            label="Prénom(s)"
            value={firstName}
            onChangeText={setFirstName}
            left={<TextInput.Icon icon={() => <Icon name="account" size={20} />} />}
            style={styles.input}
          />

          {/* Phone */}
          <TextInput
            mode="outlined"
            label="Téléphone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            left={<TextInput.Icon icon={() => <Icon name="phone" size={20} />} />}
            style={styles.input}
          />

          {/* Address */}
          <TextInput
            mode="outlined"
            label="Adresse"
            value={address}
            onChangeText={setAddress}
            left={<TextInput.Icon icon={() => <Icon name="map-marker" size={20} />} />}
            style={styles.input}
          />

          {/* ID Type */}
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <TextInput
                mode="outlined"
                label="Type de pièce"
                value={idType}
                onFocus={() => setMenuVisible(true)}
                left={<TextInput.Icon icon={() => <Icon name="card" size={20} />} />}
                style={styles.input}
              />
            }
          >
            <Menu.Item onPress={() => setIdType('Passport')} title="Passport" />
            <Menu.Item onPress={() => setIdType('ID Card')} title="ID Card" />
          </Menu>

          {/* ID Number */}
          <TextInput
            mode="outlined"
            label="Numéro de la pièce"
            value={idNumber}
            onChangeText={setIdNumber}
            left={<TextInput.Icon icon={() => <Icon name="card-account-details" size={20} />} />}
            style={styles.input}
          />

          {/* Expiration Date */}
          <TextInput
            mode="outlined"
            label="Expiration de la carte"
            value={cardExpiration.toLocaleDateString()}
            onFocus={() => setShowDatePicker(true)}
            left={<TextInput.Icon icon={() => <Icon name="card-account-details" size={20} />} />}
            right={<TextInput.Icon icon={() => <Icon name="calendar" size={20} />} />}
            style={styles.input}
          />
          {showDatePicker && (
            <DateTimePicker
              value={cardExpiration}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setCardExpiration(selectedDate);
              }}
            />
          )}

          {/* Date of Birth */}
          <TextInput
            mode="outlined"
            label="Date de naissance"
            value={dob.toLocaleDateString()}
            onFocus={() => setShowDobPicker(true)}
            left={<TextInput.Icon icon={() => <Icon name="cake-variant" size={20} />} />}
            right={<TextInput.Icon icon={() => <Icon name="calendar" size={20} />} />}
            style={styles.input}
          />
          {showDobPicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDobPicker(false);
                if (selectedDate) setDob(selectedDate);
              }}
            />
          )}

          {/* Country */}
          <Menu
            visible={countryMenuVisible}
            onDismiss={() => setCountryMenuVisible(false)}
            anchor={
              <TextInput
                mode="outlined"
                label="Pays"
                value={country}
                onFocus={() => setCountryMenuVisible(true)}
                left={<TextInput.Icon icon={() => <Icon name="map" size={20} />} />}
                style={styles.input}
              />
            }
          >
            <Menu.Item onPress={() => setCountry('France')} title="France" />
            <Menu.Item onPress={() => setCountry('USA')} title="USA" />
            <Menu.Item onPress={() => setCountry('Canada')} title="Canada" />
          </Menu>

          {/* Continue Button */}
          <Button mode="contained" onPress={() => {
            Navigaiton.navigate('PaymentScreenOne')
          }} style={styles.button}>
            Continuer
          </Button>

          {/* Skip Button */}
          <Button mode="text" onPress={() => console.log('Sauter')} style={styles.skipButton}>
            Sauter
          </Button>
        </KeyboardAwareScrollView>
      </View>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		backgroundColor: 'white'

  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
		color: colors.Text_Black,
		fontFamily: FONT.Bold,
		fontSize: 16
  },
  input: {
    marginBottom: 15,
    flex: 1,
		backgroundColor: 'white'
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.Primary,
		borderRadius: 8,
		paddingVertical: 5
  },
  skipButton: {
    marginTop: 10,
    color: colors.Primary,
		borderRadius: 8,
  },
});

