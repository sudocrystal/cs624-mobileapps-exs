// Listing 2.11 Destructuring state and props
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      book: 'React Native in Action'
    }
  }

  updateBook() {
    this.setState({
      book: 'Express in Action'
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

class BookDisplay extends React.Component {
  render() {
    const { book, updateBook } = this.props
    return (
      <View style={styles.container}>
        <Text 
         onPress={ updateBook }>
          { book }
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
      backgroundColor: '#00FFFF',
    },
  });

export default MyComponent;