import SignInScreen from '../screens/SignInScreen'
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'


const AuthNavigation = createStackNavigator(
    {
        Login: { screen: SignInScreen , navigationOptions: {title: 'Drake Admissions App'}}
    },
    {
        initialRouteName: 'Login'
    }
)

export default AuthNavigation