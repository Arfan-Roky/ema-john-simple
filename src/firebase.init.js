// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBJlBAR-GKzVzc0DlJsz5dN12RTe5CDVI',
  authDomain: 'ema-john-simple-db828.firebaseapp.com',
  projectId: 'ema-john-simple-db828',
  storageBucket: 'ema-john-simple-db828.appspot.com',
  messagingSenderId: '990748405939',
  appId: '1:990748405939:web:82e0350953a2a9029180c6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;