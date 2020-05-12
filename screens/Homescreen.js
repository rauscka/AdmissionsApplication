//This file creates the home screen that is on both the student and tour guide views of the app.

import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView, Linking} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//This class is where the home screen is actually built, and it includes the functionality for users to scroll
// on the home page.
//It includes images, text, and hyperlinks for Drake websites.
export default class Homescreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: '#cfe9f3'} }>
          <View style={{
              height: 0,
              width: 100,
              borderTopWidth: 0,
              marginTop: 10
          }} />
        <View style={styles.info}>
          <Text style={{fontSize: 24, fontWeight:"bold", textAlign:"center"}}> Welcome to the Drake Admissions App! </Text>
        </View>
        <Image
            style={styles.Pic}
            source={{
              uri:
                  'https://www.gannett-cdn.com/presto/2018/11/13/PDEM/a3022b9f-9238-4bd4-9349-6f08061052a5-1113_robo_03.jpg',
            }}
        />
          <View style={{
              height: 0,
              width: 100,
              borderTopWidth: 0,
              marginTop: 15
          }} />
        <View style={styles.containerTwo}>
          <Text style={{fontSize: 18}}>This is a centralized location for you to navigate campus and the Drake neighborhood, learn about the Drake Bulldog experience, and get your questions answered while visiting Drake University!</Text>
        </View>
          <View style={{
              height: 0,
              width: 400,
              borderTopWidth: 2,
              marginBottom: 20
          }} />
        <View>
          <Text style={{fontWeight: "bold", fontSize: 22, height: 35, marginBottom: 5, textDecorationLine: "underline"}}>Navigate to Popular Drake Links Below: </Text>
        </View>
        <View>
          <Text style={{color: 'blue', height: 30, fontSize: 18}}
                onPress={() => Linking.openURL('http://drake.edu')}>
            Drake University Home Page
          </Text>
        </View>
        <View>
          <Text style={{color: 'blue', height: 30, fontSize: 18}}
                onPress={() => Linking.openURL('http://drake.edu/academics/collegesschools/')}>
            Colleges at Drake University
          </Text>
        </View>
        <View>
          <Text style={{color: 'blue', height: 30, fontSize: 18}}
                onPress={() => Linking.openURL('http://drake.edu/visit/directions/')}>
            Campus Directions & Parking
          </Text>
        </View>
        <View>
          <Text style={{color: 'blue', height: 30, fontSize: 18}}
                onPress={() => Linking.openURL('http://drake.edu/map/')}>
            Interactive Map of Drake University
          </Text>
        </View>
      </ScrollView>
    );
  }
}

//This is where the page design is created.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#cfe9f3',
  },
  info: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#cfe9f3',
    height: 90
  },
  containerTwo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
      marginTop: 10,
    justifyContent: "flex-end",
    backgroundColor: '#cfe9f3',
    height: 120
  },
  Pic: {
    width: 400,
    height: 200,
  },
});
