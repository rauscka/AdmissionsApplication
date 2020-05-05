// import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';
//
// export default class Message extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text>Message Your Tour Guide</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#cfe9f3',
//   },
// });

import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Message extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
        <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
        />
    )
  }
}
