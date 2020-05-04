import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Homescreen from '../screens/Homescreen'


const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppNavigation
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
