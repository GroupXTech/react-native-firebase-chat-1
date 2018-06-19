import { StackNavigator } from 'react-navigation'

import ChatScreen from './ChatScreen'
import ContactsScreen from './ContactsScreen'

const routeConfig = {
  Chat: { screen: ChatScreen },
  Contacts: { screen: ContactsScreen }
}

export default StackNavigator(routeConfig)
