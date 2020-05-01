import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Aboutscreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>About Drake</Text>
        <Button title={'Dogtown'} onPress={() => navigate('Dogtown')} />
        <Button
          title={'Drake Traditions'}
          onPress={() => navigate('Drake Traditions')}
        />
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
