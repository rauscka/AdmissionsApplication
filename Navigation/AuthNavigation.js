//This file is where the sign in screen is actually called before a user is logged in and after a user
//has logged out.
//Although a stack navigator is created, the sign in screen is the only screen a user can navigate to
//before logging in and after logging out.

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