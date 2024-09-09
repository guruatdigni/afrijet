import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { AirplaneLanding, AirplaneLandingWhite, AirplaneTakeoff, AirplaneTakeoffWhite, bg } from '../../assets/image';
import { Header } from '../../components/Header/Header';
import { colors, FONT, FONTS_SIZE } from '../../utils/Styles';

export const Dashboard = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
          
					<Header />
            {/* Flight Booking Section */}
            <View style={styles.bookingContainer}>
                <Text style={styles.bookingTitle}>Réserver un vol</Text>
                <Text style={styles.bookingSubtitle}>Rendez votre vol mémorable!</Text>

                <ImageBackground 
                    source={bg} 
                    style={styles.imageBackground} 
                    imageStyle={{ borderRadius: 10 }}
                >
									 <View style={styles.dimOverlay} />
                    <View style={styles.flightDetails}>
                        <View style={styles.flightRow}>
             						 <View style={{flexDirection: 'row', alignItems: 'center'}}>
													<View style={{marginHorizontal: 14}}>
															<SvgXml xml={AirplaneTakeoffWhite} />
														</View>
														<View>
																<Text style={styles.airportText1}>Delhi<Text style={styles.airportText2}>{"  "}DEL</Text> </Text>
																<Text style={styles.airportText}>Aéroport international Indira Gandhi</Text>
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
																<SvgXml xml={AirplaneLandingWhite} />
															</View>
														<View>
                            	<Text style={styles.airportText1}>Kolkata<Text style={styles.airportText2}>{"  "}CUU</Text> </Text>
                            	<Text style={styles.airportText}>Aéroport international Subhash Chandra</Text>
														</View>
													</View>
														<View style={styles.labelBox}>
                            	<Text style={styles.label}>Destination</Text>
														</View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Checher Un Vol</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* Best Price Section */}
            <View style={styles.bestPriceContainer}>
                <View style={styles.priceHeader}>
                    <Text style={styles.priceTitle}>Meilleur prix</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>Voir tout</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.priceCard}>
                    <Image
                        source={{uri: 'https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-a248aa0418c5154e72d6a555f556bf5d99e7cac7.jpg'}}
                        style={styles.priceImage}
                    />
                    <View>
                        <Text style={styles.priceLocation}>Dubai</Text>
                        <Text style={styles.priceAmount}>Depuis 371,000 ETB</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: 100,
        height: 30,
        resizeMode: 'contain',
    },
    bookingContainer: {
        padding: 15,
    },
    bookingTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
		dimOverlay: {
			...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
			backgroundColor: 'black',
			opacity: 0.3, // Adjust opacity to dim the image
		},
    bookingSubtitle: {
        color: '#777',
        marginBottom: 20,
    },
    imageBackground: {
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    flightDetails: {
        marginBottom: 20,
    },
    flightRow: {
        marginBottom: 20,
				borderRadius: 8,
				borderWidth: 1,
				padding: 10,
				borderColor: '#E6E8E7'
    },
		labelBox: {
			position: 'absolute',
			left: '5%',
			top: "-23%",
			backgroundColor: '#FFFFFF',
			borderRadius: 8
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
			fontSize: FONTS_SIZE.regular
	},
		airportText2: {
			color: '#fff',
			fontFamily: FONT.Medium,
				fontSize: FONTS_SIZE.xsmall2,
	},
    airportText: {
        color: '#fff',
    },
    switchButton: {
        position: 'absolute',
        top: '35%',
        right: 15,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 50,
				zIndex:1
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

export default Dashboard;
