import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Animated } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { colors } from '../../../utils/Styles';

const dates = [
  { id: 1, date: 'Fri, March 24', price: 'EUR 28,000' },
  { id: 2, date: 'Fri, March 24', price: 'EUR 28,000' }, // Active state
  { id: 3, date: 'Fri, March 24', price: 'EUR 28,000' },
  { id: 4, date: 'Sat, March 25', price: 'EUR 30,000' },
  { id: 5, date: 'Sun, March 26', price: 'EUR 32,000' },
  // Add more dates if needed
];

export const SelectableDateComponent = () => {
  const [selectedId, setSelectedId] = useState(2); // Default selected item
  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = (id) => {
    setSelectedId(id);

    // Start animation
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0); // Reset the animation after completion
    });
  };

  const renderItem = ({ item }) => {
    const isActive = item.id === selectedId;

    const scale = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.1],
    });

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handlePress(item.id)}
      >
        <Animated.View style={{ transform: [{ scale: isActive ? scale : 1 }] }}>
					<View style={{paddingHorizontal: 20}}>

          <Text style={[styles.dateText, isActive && styles.activeText]}>
            {item.date}
          </Text>
          <Text style={[styles.priceText, isActive && styles.activeText]}>
            {item.price}
          </Text>
					</View>
          <View style={styles.dividerContainer}>
            {isActive ? <Divider style={styles.activeDivider} /> : <Divider style={styles.inactiveDivider} />}
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={dates}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        extraData={selectedId} // To re-render on state change
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'space-around',
		paddingHorizontal: 14
  },
  itemContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  dateText: {
    color: 'gray',
  },
  priceText: {
    color: 'gray',
  },
  activeText: {
    color: 'red',
  },
  activeDivider: {
    backgroundColor: colors.Primary,
    width: '100%',
  },
  inactiveDivider: {
    backgroundColor: '#6666666B',
    width: '100%',
  },
  dividerContainer: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
    alignItems: 'center',
  },
  mainDivider: {
    backgroundColor: 'gray',
    height: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
