// Listing 3.4 Setting the initial state
/*
  In App.js, before the render function, add a constructor and an initial state to the class, and initialize these values in the state.
*/

/*
  Set up an initial state for some of the values you’ll need later. 
      A value to hold the current state of the TextInput that will add the todos, named inputValue; 
      You need an array to keep your todos, which you’ll name todos; 
      A value to store the type of todo that you’re currently viewing (All, Current, or Active), named type.

      <Text>Listing 3.4!</Text>
    It is used for testing - the mobile app works.
*/
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

class App extends Component {

  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <View>
            <Text>Listing 3.4 Setting the initial state!</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App