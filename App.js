import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './src/assets/styles/index.css';
import LoginScreen from './src/modules/login/loginScreen';
import bookScreen from './src/modules/book/bookScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          initialRouteName: "login"
        }} 
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="book" component={bookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;