import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB_yNLoZ8w7tXcZ4eBQ2aeDmNhMQvDTxfQ',
  authDomain: 'answersai-c659e.firebaseapp.com',
  projectId: 'answersai-c659e',
  storageBucket: 'answersai-c659e.appspot.com',
  messagingSenderId: '231126996141',
  appId: '1:231126996141:web:1a38ac1f2eb04dfdd86224',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)