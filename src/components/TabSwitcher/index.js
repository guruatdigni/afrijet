import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const TabSwitcher = ({ tabs, onTabPress }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const translateX = useRef(new Animated.Value(0)).current;
  const [tabLayouts, setTabLayouts] = useState([]);

  const handleTabLayout = (event, index) => {
    const { x, width } = event.nativeEvent.layout;
    setTabLayouts((prevLayouts) => {
      const newLayouts = [...prevLayouts];
      newLayouts[index] = { x, width };
      return newLayouts;
    });
  };

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    if (tabLayouts[index]) {
      Animated.spring(translateX, {
        toValue: tabLayouts[index].x,
        useNativeDriver: true,
      }).start();
    }
  }, [activeTab, tabLayouts]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (onTabPress) {
      onTabPress(tab);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.activeTabIndicator,
          {
            width: tabLayouts[tabs.indexOf(activeTab)]?.width || 0,
            transform: [{ translateX }],
          },
        ]}
      />
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => handleTabPress(tab)}
          onLayout={(event) => handleTabLayout(event, index)}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab && styles.activeTabText,
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'space-between', // Keep space between elements
    backgroundColor: '#f0f0f0', // Inactive background color
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1, // Ensure tabs stretch to take up space
  },
  activeTabIndicator: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#D9534F', // Active tab color
    borderRadius: 25,
    top: 0,
  },
  tabText: {
    color: '#757575', // Inactive text color
    fontSize: 14,
    zIndex: 1, // Ensure text is above the active indicator
  },
  activeTabText: {
    color: '#fff', // Active text color
  },
});

export default TabSwitcher;
