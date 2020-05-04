import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Draketraditions extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Drake Traditions</Text>
        <Button title={'Dogtown'} onPress={() => navigate('Dogtown')} />
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
