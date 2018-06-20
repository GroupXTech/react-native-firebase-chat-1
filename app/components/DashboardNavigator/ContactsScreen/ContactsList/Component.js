import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import ContactRow from './ContactRow'

import translations from '../../../../i18n'

import styles from './Styles'

const ITEM_HEIGHT = 50

class ContactsListComponent extends Component {

  constructor() {
    super()

    this.renderItem = ({ item }) => {
      return <ContactRow contact={item} />
    }

    this.emptyList = () => {
      return (
        <Text
          style={styles.placeholder}>
          {translations.t('placeholder')}
        </Text>
      )
    }
  }

  componentDidUpdate() {
    if (this.props.data.length) {
      this.flatList.scrollToIndex({ animated: true, index: 0 });
    }
  }

  render() {
    const data = this.props.data
    const contentContainerStyle = styles.flatlistContainerStyle
    return (
      <FlatList
        ref={(c) => { this.flatList = c }}
        style={styles.container}
        contentContainerStyle={contentContainerStyle}
        data={data}
        keyExtractor={item => item.time}
        renderItem={this.renderItem}
        ListEmptyComponent={this.emptyList}
      />
    )
  }
}

ContactsListComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ContactsListComponent
