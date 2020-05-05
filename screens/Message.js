import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Message extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Message Your Tour Guide</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cfe9f3',
  },
});
