// Listing 2.2 Setting state with a constructor
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {

  constructor(){
    super()
    this.state = {
      year: 2016,
      name: 'Nader Dabit',
      colors: ['blue']
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My name is: { this.state.name }</Text>
        <Text>The year is: { this.state.year }</Text>
        <Text>My colors are { this.state.colors[0] }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF00FF',
    },
  });

export default MyComponent;