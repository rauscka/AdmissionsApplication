/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/Homescreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/Aboutscreen';
import DrakeTraditions from './screens/nestedScreens/Draketraditions';
import DogTown from './screens/nestedScreens/Dogtown';
import {Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from './screens/Message';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {LearnMoreLinks, Colors} from 'react-native/Libraries/NewAppScreen';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

const Stack = createStackNavigator();
const TopStack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

function nestedAboutDrake() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About Screen" component={AboutScreen} />
      <Stack.Screen name="Dogtown" component={DogTown} />
      <Stack.Screen name="Drake Traditions" component={DrakeTraditions} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Header
        leftComponent={<LogoTitle />}
        centerComponent={{text: 'A Day in the life', style: {color: '#fff'}}}
        rightComponent={{color: '#fff'}}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-paw' : 'md-paw';
            } else if (route.name === 'About Drake') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Message') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3b43ff',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Drake" component={nestedAboutDrake} />
        <Tab.Screen name="Message" component={Message} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainerTwo: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
