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
import {Header} from 'react-native-elements';

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

const appNavigator = createStackNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

function StackScreen() {
  return (
    <appNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <appNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'My home'}}
      />
    </appNavigator.Navigator>
  );
}

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

// const App: () => React$Node = () => {
//   return (
//     <NavigationContainer>
//       <Header
//         leftComponent={{icon: 'menu', color: '#fff'}}
//         centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
//         rightComponent={{icon: 'home', color: '#fff'}}
//       />
//       <appNavigator.Navigator initialRouteName="Home">
//         <appNavigator.Screen name="Home" component={HomeScreen} />
//         <appNavigator.Screen name="AboutDrake" component={AboutScreen} />
//       </appNavigator.Navigator>
//     </NavigationContainer>
//   );
// };
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header
        leftComponent={<LogoTitle />}
        centerComponent={{text: 'A Day in the life', style: {color: '#fff'}}}
        rightComponent={{color: '#fff'}}
      />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Drake" component={AboutScreen} />
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
