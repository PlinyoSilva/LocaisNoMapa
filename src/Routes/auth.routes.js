import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';

const AuthStack = createStackNavigator();

export default AuthRoutes = () =>(
    <AuthStack.Navigator headerMode={null}>
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
);