import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Header} from "react-native-elements";
import HomeScreen from "../screens/Homescreen";
import AboutScreen from "../screens/Aboutscreen";
import {Button, Image, StyleSheet} from "react-native";


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


const Tab = createBottomTabNavigator();

class AppNavigation extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer>
                <Header
                    leftComponent={<LogoTitle/>}
                    centerComponent={{text: 'Drake Admissions App', style: {color: '#fff'}}}
                    rightComponent={<Button title={'Log Out'} onPress={() => navigate('Auth')}/>}
                />
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="About Drake" component={AboutScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 60,
        height: 60,
    },
});

export default AppNavigation