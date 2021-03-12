import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwwUWoDnn0GCxFC8O7uyk7myMuLWLF1Ng",
    authDomain: "crwn-db-bd916.firebaseapp.com",
    databaseURL: "https://crwn-db-bd916-default-rtdb.firebaseio.com",
    projectId: "crwn-db-bd916",
    storageBucket: "crwn-db-bd916.appspot.com",
    messagingSenderId: "1097820404571",
    appId: "1:1097820404571:web:b91471899ada6c1295387e",
    measurementId: "G-NWTC8J4WQC"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        try {
            const { displayName, email } = userAuth
            const createdAt = new Date()

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error)
        }
    }

    return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
