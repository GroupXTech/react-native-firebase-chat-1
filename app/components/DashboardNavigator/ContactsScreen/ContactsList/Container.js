import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadContacts } from '../../../../store/session/actions'
import { getChatItems } from '../../../../store/chat/selectors'

import ContactsListComponent from './Component'

class ContactsListContainer extends Component {

  componentDidMount() {
    this.props.loadContacts()
  }

  render() {
    const data = getChatItems(this.props.contacts).reverse();
    return (
      <ContactsListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.session.contacts,
  error: state.session.loadContactsError
})

const mapDispatchToProps = {
  loadContacts
}

ContactsListContainer.propTypes = {
  contacts: PropTypes.object,
  error: PropTypes.string,
  loadContacts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListContainer)
