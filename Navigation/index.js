//This file contains the switch navigator which allows for the app to switch between the sign in screen and
//the student and tour guide views of the app.
//The default is the sign in screen, as that is what we want users to view until they have been authenticated.

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