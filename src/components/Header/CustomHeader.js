import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import { commonStyles } from '../../utils/Styles';
import IconNB from '../Icon/IconNB';


export const CustomHeader = ({title}) => {
	const Navigation = useNavigation()
	return(
		<View style={{paddingHorizontal: 14, paddingVertical: 18,backgroundColor: 'white', flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>	
			<TouchableOpacity onPress={() => {
					Navigation.goBack()
			}}>
					<IconNB size={24} color='#191919' type={'MaterialIcons'} name="arrow-back-ios-new" />
			</TouchableOpacity>
			<Text style={commonStyles.Heading}>{title}</Text>
			<View></View>
	</View>
	)
}