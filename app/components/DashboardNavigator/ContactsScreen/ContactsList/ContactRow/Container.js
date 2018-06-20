import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContactRow from './Component'

import firebaseService from '../../../../../services/firebase'

class MessageRowContainer extends Component {

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email == this.props.contact.email;
    return (
      <ContactRow
        contact={this.props.contact}
        isCurrentUser={isCurrentUser} />
    );
  }
}

MessageRowContainer.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default MessageRowContainer
