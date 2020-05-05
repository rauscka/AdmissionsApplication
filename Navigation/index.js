import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'
import AppNavigation2 from './AppNavigation2'
import React from 'react';


const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppNavigation,
        App2: AppNavigation2
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer