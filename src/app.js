import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // firebase initalization.
    firebase.initializeApp({
      apiKey: 'AIzaSyDru4917qJ8OpzFt51kVQEvdNH_f3UOebM',
      authDomain: 'auth-react-native-cece2.firebaseapp.com',
      databaseURL: 'https://auth-react-native-cece2.firebaseio.com',
      projectId: 'auth-react-native-cece2',
      storageBucket: 'auth-react-native-cece2.appspot.com',
      messagingSenderId: '11977039500'
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
