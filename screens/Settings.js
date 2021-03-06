//This file is not currently being used by the app.

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Profile from './Profile'


export default class Settings extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Button title={'Profile'} onPress={() => navigate('Profile')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#25ffe2',
  },
});
