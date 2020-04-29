import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Header from '../shared/header';

export default class Homescreen extends React.Component {
  static navigationOptions = {
    title: () => <Header />,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title={'About Page'} onPress={() => navigate('AboutDrake')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
  },
  info: {
    flex: 6,
    backgroundColor: '#ff1e78',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
