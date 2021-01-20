import React from 'react';
import Map from '../components/Map';

import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default AppRoutes = () =>(
    <AppStack.Navigator>
        <AppStack.Screen name="Map" component={Map} />
    </AppStack.Navigator>
);