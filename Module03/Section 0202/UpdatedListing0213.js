// Listing 2.13 Destructuring props in a stateless component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      book: 'Destructuring props in a stateless component - React Native in Action'
    }
  }

  updateBook() {
    this.setState({
      book: 'Destructuring props in a stateless component - Express in Action'
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

const BookDisplay = ({ updateBook, book }) => {
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
      backgroundColor: '#FF0000',
    },
  });

export default MyComponent;