import React, { Component } from 'react'

import ChatScreen from './Component'
import LogoutButton from './LogoutButton'
import ChatButton from './ChatButton'

import translations from '../../../i18n'

class ChatScreenContainer extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: translations.t('contacts'),
    headerRight: <LogoutButton />,
    headerLeft: <ChatButton navigation={navigation} />,
  })

  render() {
    return (
      <ChatScreen />
    )
  }
}

export default ChatScreenContainer
