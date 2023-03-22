// Lisitng 2.8 - Dynamic props with a variable
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  render() {
    let book = 'Dynamic Property with a variable - React Native in Action'
    return (
      <BookDisplay book={ book } />
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
      backgroundColor: '#FFFF00',
    },
  });

export default MyComponent;