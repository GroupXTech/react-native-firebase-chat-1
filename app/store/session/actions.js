import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_CONTATCS = firebaseService.database().ref('Contacts')
const FIREBASE_REF_CONTATCS_LIMIT = 20;

export const loadContacts = () => {
  return (dispatch) => {
    FIREBASE_REF_CONTATCS.limitToLast(FIREBASE_REF_CONTATCS_LIMIT).on('value', (snapshot) => {
      dispatch(loadContactsSuccess(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadContactsError(errorObject.message))
    })
  }
}

const loadContactsSuccess = contacts => ({
  type: types.CONTACTS_LOAD_SUCCESS,
  contacts
})

const loadContactsError = error => ({
  type: types.CONTACTS_LOAD_ERROR,
  error
})

export const restoreSession = () => {
  return (dispatch) => {
    dispatch(sessionRestoring())

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user))
          unsubscribe()
        } else {
          dispatch(sessionLogout())
          unsubscribe()
        }
      })
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(sessionLoading())

    firebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(sessionError(error.message))
      })

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          var newUser = {
            id: user.uid,
            email: user.email
          }
          FIREBASE_REF_CONTATCS.child(user.uid).set(newUser);
          dispatch(sessionSuccess(user))
          unsubscribe()
        }
      })
  }
}

export const signupUser = (email, password) => {
  return (dispatch) => {
    dispatch(sessionLoading())

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(sessionError(error.message));
      })

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user))
          var newUser = {
            id: user.uid,
            email: user.email
          }
          FIREBASE_REF_CONTATCS.child(user.uid).set(newUser);
          unsubscribe()
        }
      })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(sessionLoading())

    firebaseService.auth()
      .signOut()
      .then(() => {
        dispatch(sessionLogout())
      })
      .catch(error => {
        dispatch(sessionError(error.message))
      })
  }
}

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING
})

const sessionLoading = () => ({
  type: types.SESSION_LOADING
})

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
})

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error
})

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
})
