import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDN0Tag9VRM8qdmQWuxjY61WiWXib85ls",
  authDomain: "cart-b38c7.firebaseapp.com",
  projectId: "cart-b38c7",
  storageBucket: "cart-b38c7.appspot.com",
  messagingSenderId: "143502470399",
  appId: "1:143502470399:web:c3e7ace75f8ad7070db0ca"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { auth, db };

