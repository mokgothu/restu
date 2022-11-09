 import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Order from './components/Order';
import Cart from './components/Cart';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
  <Stack.Navigator>
 <Stack.Screen name="Cart" component={Cart} />
 <Stack.Screen name="Order" component={Order} />
 <Stack.Screen name="Home" component={Home} />
      
        

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
