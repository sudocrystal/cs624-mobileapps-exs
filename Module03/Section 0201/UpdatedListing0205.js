// Listing 2.5 State with other data types - a Boolean, an array, and an object 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      year: 2016,
      leapYear: true,
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming'
      }
    }
  }
  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>This is a leapyear!</Text>
    }
    
    return (
      <View style={styles.container}>
        <Text>{ this.state.year }</Text>
        <Text>Length: { this.state.info.length }</Text>
        <Text>Type: { this.state.info.type }</Text>
        { leapyear }
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