// Listing 2.12 Props with stateless components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      book: 'Props with stateless components - React Native in Action'
    }
  }

  updateBook() {
    this.setState({
      book: 'Props with stateless components - Express in Action'
    })
  }

  render() {
    const { book } = this.state
    return (
      <BookDisplay 
       updateBook={ () => this.updateBook() } 
       book={ book } />
    )
  }
}

/*
  Convert the class/stateful  component to a function/stateless component
  To access props using a stateless component, 
  pass in props as the first argument to the function.
*/
const BookDisplay = (props) => {
  const { book, updateBook } = props
  return (
    <View style={styles.container}>
      <Text 
        onPress={ updateBook }>
        { book }
      </Text>
    </View>
  )
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