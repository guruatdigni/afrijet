import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dashboard } from '../screens/Dashboard';
import { colors } from '../utils/Styles';
import { Reservation } from '../screens/Reservation';
import { Enregistrement } from '../screens/Enregistrement';
import { ProfileScreen } from '../screens/Profile';
import FlightSearch from '../screens/FlightSearch';

const Tab = createMaterialBottomTabNavigator();
const fontSize = 8;

function CustomTabBarIcon({ name, color, focused }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <MaterialCommunityIcons name={name} color={focused ? color : '#FAD3CA'} size={26} />
    </View>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      barStyle={{ backgroundColor: colors.Primary }}
      shifting={true} // Disable shifting to show all labels
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: <Text style={styles.label}>Home</Text>,
          tabBarIcon: ({ color, focused }) => (
            <CustomTabBarIcon name="home-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Flights"
        component={Reservation}
        options={{
          tabBarLabel: <Text style={styles.label}>Réservation</Text>, // Using Text component
          tabBarIcon: ({ color, focused }) => (
            <CustomTabBarIcon name="airplane" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={FlightSearch}
        options={{
          tabBarLabel: <Text style={styles.label}>Infos vols</Text>, // Using Text component
          tabBarIcon: ({ color, focused }) => (
            <CustomTabBarIcon name="briefcase-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Enregistrement"
        component={Enregistrement}
        options={{
          tabBarLabel: <Text style={styles.label}>Enregistrement</Text>, // Using Text component
          tabBarIcon: ({ color, focused }) => (
            <CustomTabBarIcon name="clipboard-check-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: <Text style={styles.label}>Profile</Text>, // Using Text component
          tabBarIcon: ({ color, focused }) => (
            <CustomTabBarIcon name="account-outline" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
  },
});
