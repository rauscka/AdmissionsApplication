//This file is where the student view of the app is created once a student has logged in.

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Header} from "react-native-elements";
import HomeScreen from "../screens/Homescreen";
import Message from "../screens/Message";
import StudentSchedule from "../screens/StudentSchedule";
import {Button, Image, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


//This function creates the Drake logo in the top left corner of the header.
function LogoTitle() {
    return (
        <Image
            style={styles.tinyLogo}
            source={{
                uri:
                    'https://pbs.twimg.com/profile_images/575308227916603392/cx-yL1m-_400x400.jpeg',
            }}
        />
    );
}


//This is where we create the navigation bar on the bottom of the screen.
const Tab = createBottomTabNavigator();

//This class is where we create the basic navigation container for the student view, including the ability to
//navigate between the home screen, schedule, and messages on the bottom navigator as well as the header at the
//top of the screen where we can log out of the app.
//This class also adds some icons to the three buttons on the bottom tab navigator.
class AppNavigation extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer>
                <Header
                    leftComponent={<LogoTitle/>}
                    centerComponent={{text: 'Drake Admissions App', style: {color: '#fff', fontWeight: "bold", fontSize: 20}}}
                    rightComponent={<Button title={'Log Out'} onPress={() => navigate('Auth')}/>}
                />
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'md-paw' : 'md-paw';
                            } else if (route.name === 'Schedule') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            } else if (route.name === 'Message') {
                                iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#3b43ff',
                        inactiveTintColor: 'gray',
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Schedule" component={StudentSchedule}/>
                    <Tab.Screen name="Message" component={Message}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

//This is where we create the design for the logo in the header.
const styles = StyleSheet.create({
    tinyLogo: {
        width: 60,
        height: 60,
    },
});

export default AppNavigation
