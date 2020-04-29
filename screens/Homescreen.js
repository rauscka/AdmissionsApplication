import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Homescreen extends React.Component {
  static options = {
    headerText: 'Home Guyd',
    name: 'here',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title={'About Page'} onPress={() => navigate('About Drake')} />
        <View style={styles.info}>
          <Text>Here is a different Section that I am testing out</Text>
        </View>
        <View style={styles.containerTwo}>
          <Text>Hello There</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a1df',
  },
  info: {
    flex: 3,
    backgroundColor: '#ffff32',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerTwo: {
    flex: 3,
    flexDirection: 'row',
  },
});
