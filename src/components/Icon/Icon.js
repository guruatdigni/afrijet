import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {FONT_FAMILY, colors, commonStyles} from '../../utils/Styles';

const Icon = ({onPress,  title, Icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{flexDirection:'row', alignItems:'center', gap:3}}>
       <View>{Icon}</View>
      <Text style={styles.IconText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Icon;
const styles = StyleSheet.create({
  icon: {
    height: 10,
    width: 10,
    resizeMode:'contain'
  },
  IconText: {

    fontFamily: FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.41,
  
    color:colors.LightText,
  },
});
