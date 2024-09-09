import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from '../../components/Header/Header';
import { colors } from '../../utils/Styles';

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState('IN 230');

  const handleSearch = () => {
    // Add search functionality here
    console.log(`Searching for flight ${flightNumber}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      {/* Search Section */}
      <View style={styles.searchSection}>
        <Text style={styles.label}>Numéro de vol</Text>
        <TextInput
          style={styles.input}
          value={flightNumber}
          onChangeText={setFlightNumber}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Checher Un Vol</Text>
        </TouchableOpacity>
      </View>

      {/* Flight Details Section */}
      <View style={styles.detailsSection}>
        <View style={styles.leftColumn}>
          <Text style={styles.detailLabel}>Numéro de vol</Text>
          <Text style={styles.detailLabel}>Départ</Text>
          <Text style={styles.detailLabel}>Destination</Text>
          <Text style={styles.detailLabel}>Heure de départ</Text>
          <Text style={styles.detailLabel}>Heure d'arrivée</Text>
          <Text style={styles.detailLabel}>Statut</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.detailValue}>IN 230</Text>
          <Text style={styles.detailValue}>DEL</Text>
          <Text style={styles.detailValue}>CCU</Text>
          <Text style={styles.detailValue}>5:50</Text>
          <Text style={styles.detailValue}>7:30</Text>
          <Text style={styles.detailValue}>Programmé</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  searchSection: {
    backgroundColor: '#800000', // Burgundy color
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.Primary, // Button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsSection: {
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
		backgroundColor:  colors.SecondaryColor,
		padding: 20
  },
  rightColumn: {
    flex: 1,
		padding: 20
  },
  detailLabel: {
    color: colors.White,
    fontSize: 16,
    marginBottom: 10,
  },
  detailValue: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
});

export default FlightSearch;
