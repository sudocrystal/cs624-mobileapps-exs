// Listing 2.14 Passing other data types as props
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      leapYear: true,
      info: {
        type: 'programming'
      }
    }
  }
  render() {
    return (
      <BookDisplay 
       leapYear={ this.state.leapYear }
       info={ this.state.info }
       topics={['React', 'React Native', 'JavaScript']} />
    )
  }
}

const BookDisplay = (props) => {
  let leapyear
  let { topics } = props
  const { info } = props 
  topics = topics.map((topic, i) => {
    return <Text>{ topic }</Text>
  })
  if (props.leapYear) {
    leapyear = <Text>This is a leapyear!</Text>
  }
  return (
    <View style={styles.container}>
      { leapyear }
      <Text>Book type: { info.type }</Text>
      { topics }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
  });

export default MyComponent;