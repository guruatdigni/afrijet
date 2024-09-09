import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { MyTabs } from './Tab';
import { colors, FONT } from '../utils/Styles';

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.userInfoSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with the user's image
          style={styles.userImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userGreeting}>Bonjour</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerMenu}>
        {/* Mes réservations */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Reservations')}
        >
          <MaterialCommunityIcons name="airplane" size={22} color="#000" />
          <Text style={styles.menuText}>Mes réservations</Text>
        </TouchableOpacity>

        {/* The Club */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Club')}
        >
          <MaterialCommunityIcons name="account-group-outline" size={22} color="#000" />
          <Text style={styles.menuText}>The Club</Text>
        </TouchableOpacity>

        {/* Horaire de vol */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('FlightSchedule')}
        >
          <MaterialCommunityIcons name="clock-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Horaire de vol</Text>
        </TouchableOpacity>

        {/* Retour */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={22} color="#000" />
          <Text style={styles.menuText}>Retour</Text>
        </TouchableOpacity>

        {/* Contactez-nous */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('ContactUs')}
        >
          <MaterialCommunityIcons name="headset" size={22} color="#000" />
          <Text style={styles.menuText}>Contactez-nous</Text>
        </TouchableOpacity>

        {/* Actualités */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('News')}
        >
          <MaterialCommunityIcons name="newspaper" size={22} color="#000" />
          <Text style={styles.menuText}>Actualités</Text>
        </TouchableOpacity>

        {/* Nos agences */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('OurAgencies')}
        >
          <MaterialCommunityIcons name="office-building" size={22} color="#000" />
          <Text style={styles.menuText}>Nos agences</Text>
        </TouchableOpacity>

        {/* Paramètres */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Settings')}
        >
          <MaterialCommunityIcons name="cog-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Paramètres</Text>
        </TouchableOpacity>

        {/* Partager */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Share')}
        >
          <MaterialCommunityIcons name="share-variant" size={22} color="#000" />
          <Text style={styles.menuText}>Partager</Text>
        </TouchableOpacity>

        {/* À propos */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('About')}
        >
          <MaterialCommunityIcons name="information-outline" size={22} color="#000" />
          <Text style={styles.menuText}>À propos</Text>
        </TouchableOpacity>
      </View>

      {/* Language selection */}
      <View style={styles.languageSection}>
        <Text style={styles.languageText}>FR/EN/ES</Text>
      </View>
    </DrawerContentScrollView>
  );
};


export const DrawerNavigation = () => {
  return (
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false, // Hide the header
        }}
      >
        {/* Wrap Tab Navigation inside Drawer */}
        <Drawer.Screen name="HomeTabs" component={MyTabs} options={{ title: 'Dashboard' }} />
        
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  userInfoSection: {
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  userGreeting: {
    fontSize: 14,
    color: '#888',
  },
  drawerMenu: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 14,
		fontFamily: FONT.Bold,
    marginLeft: 15,
		color: colors.Text_Black
  },
  languageSection: {
    marginTop: 30,
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  languageText: {
    fontSize: 14,
    color: '#888',
  },
});
