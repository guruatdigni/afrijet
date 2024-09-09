import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { colors, FONT, FONTS_SIZE, FONT_FAMILY } from '../../utils/Styles';
import EmailRegister from './EmailRegister';
import { FFRegister } from './FFRegister';
import { NumberRegister } from './NumberRegister';

const FirstRoute = () => (
	<EmailRegister />
);

const SecondRoute = () => (
	<NumberRegister />
);

const ThirdRoute = () => (
	<FFRegister />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.Primary, height: 1.5 }} // Adjust the indicator color and height
    style={{ backgroundColor: 'white', margin: 0, shadowColor: 0 }}
    renderLabel={({ route, focused }) => (
      <Text style={{
        fontFamily: FONT.Semibold,
        fontSize: FONTS_SIZE.small, // Adjust the font size if needed
        color: focused ? colors.Primary : colors.Text_GRAY,
      }}>
        {route.title}
      </Text>
    )}
  />
);

export const Register = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
    { key: 'first', title: 'Email' },
    { key: 'second', title: 'Numéro de téléphone' },
    { key: 'third', title: 'Numéro FF' },
  ]);

  return (
		<View style={{flex: 1, backgroundColor: 'white'}}> 
		<View style={{flex: 0.2, paddingHorizontal: 20, justifyContent: 'flex-end', paddingBottom: 20}}>
				<Text style={{fontFamily: FONT.Semibold, fontSize: FONTS_SIZE.extralarge, color: colors.Text_Black }}>Se connecter</Text>
				<Text style={{fontFamily: FONT.Regular, fontSize: FONTS_SIZE.regular, color: colors.Text_GRAY }}>Bienvenue sur l'application</Text>
		</View>
		<View style={{flex: 0.8}}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
		</View>
		</View>
  );
}