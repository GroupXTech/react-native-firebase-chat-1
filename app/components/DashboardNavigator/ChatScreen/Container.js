import React, { Component } from 'react'

import ChatScreen from './Component'
import LogoutButton from './LogoutButton'
import ContactButton from './ContactButton'

import translations from '../../../i18n'

class ChatScreenContainer extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: translations.t('chat'),
    headerRight: <LogoutButton />,
    headerLeft: <ContactButton navigation={navigation} />,
  })

  render() {
    return (
      <ChatScreen />
    )
  }
}

export default ChatScreenContainer
