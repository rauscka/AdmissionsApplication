import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Dogtown extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Dogtown</Text>
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
    backgroundColor: '#25ffe2',
  },
});
