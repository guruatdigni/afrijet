import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { devider } from '../../assets/image';
import { CustomHeader } from '../../components/Header/CustomHeader';
import { colors, FONT } from '../../utils/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import QRCode from 'react-native-qrcode-svg';

export const BoardingPass = () => {
  return (
		<View style={{flex:1, backgroundColor: 'white'}}>
      <CustomHeader title={`Carte d'embarquement`} />
    <ScrollView contentContainerStyle={styles.container}>
			<View style={{backgroundColor: 'white',  paddingHorizontal: 8, paddingVertical: 20, borderBottomEndRadius: 8, borderBottomStartRadius: 8}}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Mr. John Doe</Text>
          <Text style={styles.passenger}>Passager</Text>
        </View>
        <Image
          source={{ uri: 'https://seekvectorlogo.com/wp-content/uploads/2022/01/indigo-vector-logo-2022.png' }}
          style={styles.airlineLogo}
        />
      </View>

      <View style={styles.flightInfo}>
        <View style={styles.timeSection}>
          <Text style={styles.time}>5:50</Text>
          <Text style={styles.airportCode}>DEL</Text>
        </View>
				<View>
					<SvgXml xml={devider}/>
				</View>
        <View style={styles.timeSection}>
          <Text style={styles.time}>7:30</Text>
          <Text style={styles.airportCode}>CCU</Text>
        </View>
      </View>

			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
          <Text style={styles.airport}>Indira Gandhi International Airport</Text>
          <Text style={[styles.airport, {textAlign: 'right'}]}>Subhash Chandra Bose International Airport</Text>
			</View>

			

      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <FontAwesome name="calendar" size={16} color="black" />
          <Text style={styles.detailText}>15/07/2022</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="clock-o" size={16} color="black" />
          <Text style={styles.detailText}>09:30</Text>
        </View>
      </View>

      <View style={styles.ticketDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Vol</Text>
          <Text style={styles.value}>IN 230</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Grille</Text>
          <Text style={styles.value}>22</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Siège</Text>
          <Text style={styles.value}>2B</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Classe</Text>
          <Text style={styles.value}>Economy</Text>
        </View>
      </View>

      <View style={styles.qrCodeSection}>
        {/* <QRCode value="https://www.example.com" size={150} /> */}
				<Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png' }}
          style={{height: 200, width: 200}}
        />
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Télécharger</Text>
      </TouchableOpacity>

      <Text style={styles.reserveText}>Réservez un autre vol</Text>
			</View>
    </ScrollView>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
		paddingBottom: 90,
		paddingHorizontal: 20,
    backgroundColor: '#fff',
		marginTop: 20
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  passenger: {
    fontSize: 14,
    color: 'gray',
  },
  airlineLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeSection: {
  },
  time: {
    fontSize: 22,
		fontFamily: FONT.Semibold,
		color: colors.Text_Black
  },
  airportCode: {
    fontSize: 18,
		color: colors.Text_Black,
		fontFamily: FONT.Bold,
  },
  airport: {
    fontSize: 12,
    color: 'gray',
		width: 100,
  },
  iconSection: {
    paddingHorizontal: 20,
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
		paddingHorizontal: 20
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
  },
  ticketDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailItem: {
  },
  label: {
    fontSize: 14,
    // color: 'gray',
		color: colors.Text_Black,
		textAlign: 'left'
  },
  value: {
    fontSize: 16,
		fontFamily: FONT.Semibold,
		color: colors.Text_Black,
		textAlign: 'center'
  },
  qrCodeSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: colors.Primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  reserveText: {
    color: colors.Primary,
    textAlign: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
});
