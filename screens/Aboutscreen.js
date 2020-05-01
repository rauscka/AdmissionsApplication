import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';


export default class Aboutscreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>About Drake</Text>
          <Text>
              Trying to insert Firebase data here
          </Text>
        <Button title={'Home Page'} onPress={() => navigate('Home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25ffe2',
  },
});
