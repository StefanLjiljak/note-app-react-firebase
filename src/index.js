import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyDPGddlUReDyFpP-iXc0cyk0RaHq286j5E',
  authDomain: 'note-app-react-firebase.firebaseapp.com',
  databaseURL: 'https://note-app-react-firebase.firebaseio.com',
  projectId: 'note-app-react-firebase',
  storageBucket: 'note-app-react-firebase.appspot.com',
  messagingSenderId: '222282465890',
  appId: '1:222282465890:web:b9cc957cc754b935fb473b',
  measurementId: 'G-3B9QJQEQG3',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('note-container')
);
