import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
	Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Header} from '../../components/Header/Header';
import TabSwitcher from '../../components/TabSwitcher';
import {colors, FONT, FONTS_SIZE} from '../../utils/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {SvgXml} from 'react-native-svg';
import {AirplaneLanding, AirplaneTakeoff} from '../../assets/image';

export const Reservation = () => {
  const tabs = ['Aller simple', 'Retour', 'Multi destinations'];

  const handleTabPress = selectedTab => {
    console.log('Selected Tab:', selectedTab);
    // Handle the tab change logic here
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={[styles.container, {paddingHorizontal: 12}]}>
        <View style={{marginVertical: 10}}>
          <TabSwitcher tabs={tabs} onTabPress={handleTabPress} />
        </View>

        <Card style={styles.card}>
          <View style={styles.flightDetails}>
            <View style={styles.flightRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginHorizontal: 14}}>
                  <SvgXml xml={AirplaneTakeoff} />
                </View>
                <View>
                  <Text style={styles.airportText1}>
                    Delhi<Text style={styles.airportText2}>{'  '}DEL</Text>{' '}
                  </Text>
                  <Text style={styles.airportText}>
                    Aéroport international Indira Gandhi
                  </Text>
                </View>
              </View>
              <View style={styles.labelBox}>
                <Text style={styles.label}>Départ</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.switchButton}>
              <Icon name="swap-vertical" size={20} color="black" />
            </TouchableOpacity>
            <View style={[styles.flightRow, {marginBottom: 0}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginHorizontal: 14}}>
                  <SvgXml xml={AirplaneLanding} />
                </View>
                <View>
                  <Text style={styles.airportText1}>
                    Kolkata<Text style={styles.airportText2}>{'  '}CUU</Text>{' '}
                  </Text>
                  <Text style={styles.airportText}>
                    Aéroport international Subhash Chandra
                  </Text>
                </View>
              </View>
              <View style={styles.labelBox}>
                <Text style={styles.label}>Destination</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 0.5, marginRight: 10}}>
              <View style={styles.flightRow}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <View style={{marginHorizontal: 14}}>
                    <SvgXml xml={AirplaneTakeoff} />
                  </View>
                  <View>
                    <Text style={styles.airportText3}>15/07/2022</Text>
                  </View>
                </View>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>Départ</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.5, marginLeft: 10}}>
              <View style={[styles.flightRow]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <View>
                    <Text style={[styles.airportText3, {marginLeft: 16}]}>
                      + date de retour
                    </Text>
                  </View>
                </View>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>Retour</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 0.5, marginRight: 10}}>
              <View style={styles.flightRow}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  {/* <View style={{marginHorizontal: 14}}>
													<SvgXml xml={AirplaneTakeoff} />
												</View> */}
                  <View>
                    <Text style={[styles.airportText3, {marginLeft: 16}]}>
                      1 Adult
                    </Text>
                  </View>
                </View>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>Traveller</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.5, marginLeft: 10}}>
              <View style={[styles.flightRow]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <View>
                    <Text style={[styles.airportText3, {marginLeft: 16}]}>
                      Économie
                    </Text>
                  </View>
                </View>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>Classe</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Checher Un Vol</Text>
          </TouchableOpacity>
        </Card>

        <View style={styles.bestPriceContainer}>
          <View style={styles.priceHeader}>
            <Text style={styles.priceTitle}>Meilleur prix</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>Voir tout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.priceCard}>
            <Image
              source={{
                uri: 'https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-a248aa0418c5154e72d6a555f556bf5d99e7cac7.jpg',
              }}
              style={styles.priceImage}
            />
            <View>
              <Text style={styles.priceLocation}>Dubai</Text>
              <Text style={styles.priceAmount}>Depuis 371,000 ETB</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
  },
  flightDetails: {
    marginBottom: 20,
  },
  flightRow: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: '#E6E8E7',
  },
  labelBox: {
    position: 'absolute',
    left: '5%',
    top: '-23%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  label: {
    color: colors.Text_GRAY,
    fontSize: 14,
    paddingHorizontal: 20,

    // marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 5,
  },
  airportText1: {
    color: 'black',
    fontFamily: FONT.Bold,
    fontSize: FONTS_SIZE.regular,
  },
  airportText2: {
    color: '#555555',
    fontFamily: FONT.Medium,
    fontSize: FONTS_SIZE.xsmall2,
  },
  airportText: {
    color: '#555555',
    fontFamily: FONT.Regular,
  },
  airportText3: {
    color: '#555555',
    fontFamily: FONT.Semibold,
  },
  switchButton: {
    position: 'absolute',
    top: '35%',
    right: 15,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 50,
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: '#E6E8E7',
    elevation: 5,
  },
  searchButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bestPriceContainer: {
    padding: 15,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#d9534f',
  },
  priceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  priceImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  priceLocation: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceAmount: {
    color: '#888',
  },
});
