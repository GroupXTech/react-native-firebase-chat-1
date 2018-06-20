import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles'

const ContactRowComponent = props => {
  const alignItems = 'flex-start';
  return (
    <View
      style={styles.container}>
      <View
        style={[styles.bubbleView, { alignItems: alignItems }]}>
        <Text
          style={styles.messageText}>
          {props.contact.email}
        </Text>
      </View>
    </View>
  )
}

ContactRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}

export default ContactRowComponent
