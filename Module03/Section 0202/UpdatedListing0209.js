// Lisitng 2.9 - Dynamic props using state
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      book: 'Dynamic Propos using state - React Native in Action'
    }
  }
  render() {
    return (
      <BookDisplay book={ this.state.book } />
    )
  }
}
class BookDisplay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.book }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00FFFF',
    },
  });

export default MyComponent;