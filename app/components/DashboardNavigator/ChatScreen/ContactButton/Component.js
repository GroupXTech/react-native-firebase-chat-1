import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native'

import styles from './Styles'

const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.navigation.navigate('Contacts')}>

    <Image source={require('../../../../images/ic_contacts.png')} />
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired
}

export default LogoutButtonComponent
