import React, { Component } from 'react'

import ChatScreen from './Component'
import LogoutButton from './LogoutButton'

import translations from '../../../i18n'

class ChatScreenContainer extends Component {

  static navigationOptions = {
    title: translations.t('contacts'),
    headerRight: <LogoutButton />,
    headerLeft: <LogoutButton />,
  }

  render() {
    return (
      <ChatScreen />
    )
  }
}

export default ChatScreenContainer