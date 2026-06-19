import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { navigationRef } from '../utils/navigation'

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeScreen from '../screens/homeScreen';
import DataListScreen from '../screens/dataListScreen';
//import MapScreen from '../screens/mapScreen';

import Camera from '../screens/cameraScreen';
import QrCodeScreen from '../screens/qrcodeScreen';

const Stack = createStackNavigator();
const options = {
    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    gestureEnabled: false,
};


const NavigationController = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={options} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={options} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={options} />
                <Stack.Screen name='Camera' component={Camera} options={options} />
                <Stack.Screen name='QrCodeScreen' component={QrCodeScreen} options={options} />
                <Stack.Screen name='DataListScreen' component={DataListScreen} options={options} />
                {/* <Stack.Screen name='MapScreen' component={MapScreen} options={options} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationController