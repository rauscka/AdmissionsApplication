//This file creates the messaging screen that is on both the student and tour guide views of the app.
//The messaging is currently being set up through Gifted Chat, as it is easily integrated with React Native;
//however, the messages are not currently stored properly.

//In the file, it sets up the messages screen as well as the avatar for each person in the chat.

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
