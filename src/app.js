import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header,
  Button,
  CardSection,
  Card,
  Spinner
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      // logged in
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                onPress={() => {
                  firebase.auth().signOut();
                }}
              >
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      // logged out
      case false:
        return <LoginForm />;
      // when null
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
