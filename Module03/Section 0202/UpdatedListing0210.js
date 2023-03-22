// Listing 2.10 Updating dynamic props
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
  1. Declare the state variable.
  2. Write a function that will update the state variable.
  3. Pass the function and the state down to the child component as props.
  4. Attach the function to the touch handler in the child component.
*/
class MyComponent extends React.Component {
  // 1. Declare the state variable.
  constructor(){
    super()
    this.state = {
      book: 'React Native in Action'
    }
  }
  // 2. Write a function that will update the state variable.
  updateBook() {
    this.setState({
    book: 'Express in Action'
    })
  }
  // 3. Pass the function and the state down to the child component as props.
  render() {
    return (
      <BookDisplay 
       updateBook={ () => this.updateBook() } 
       book={ this.state.book } />
    )
  }
}

//   4. Attach the function to the touch handler in the child component.
class BookDisplay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text 
         onPress={ this.props.updateBook }>
          { this.props.book }
        </Text>
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