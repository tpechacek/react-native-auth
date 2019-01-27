import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header headerText="Authentication" />
        <Text>Hello</Text>
      </View>
    );
  }
}

export default App;
