/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from './src/navigation/provider';


function App(){
  
  return (
    <SafeAreaView style={{flex:1}}>
       <PaperProvider>
          <Provider />
       </PaperProvider>
    </SafeAreaView>
  );
}

export default App;
