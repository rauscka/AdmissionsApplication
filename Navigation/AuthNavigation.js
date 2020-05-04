import SignInScreen from '../screens/SignInScreen'
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'


const AuthNavigation = createStackNavigator(
    {
        Login: { screen: SignInScreen }
    },
    {
        initialRouteName: 'Login'
    }
)

export default AuthNavigation