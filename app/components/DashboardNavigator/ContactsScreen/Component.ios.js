import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import ContactsList from './ContactsList'

import styles from './Styles'

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={64}>

    <ContactsList />
  </KeyboardAvoidingView>

export default ChatScreenComponent
