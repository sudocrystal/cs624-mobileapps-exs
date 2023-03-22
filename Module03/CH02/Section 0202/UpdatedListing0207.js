// Listing 2.7 Static props – a literal book
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  render() {
    return (
      <BookDisplay book={"Static Property - Literal - React Native in Action"} />
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