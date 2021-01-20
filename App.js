import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthProvider} from './src/contexts/auth';
import Login from './src/components/Login'
import Map from './src/components/Map'
import SignUp from './src/components/Signup'

import Routes from './src/Routes'


export default App = () =>  {

  const Stack = createStackNavigator();
  
    return (
      <NavigationContainer>
          <AuthProvider>
            <Stack.Navigator headerMode={null}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Map" component={Map} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </AuthProvider>
      </NavigationContainer>
    )
  
};