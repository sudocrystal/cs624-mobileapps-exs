// Listing 3.6 Importing and using the Heading component
/*
  Bring in the Heading component, and place it in the ScrollView, replacing the  View you originally placed there.
*/
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

/*
  File path
    https://www.w3schools.com/html/html_filepaths.asp
    A relative file path points to a file relative to the current page.
    It is best practice to use relative file paths (if possible).
*/
import Heading from './app/Heading'

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
          <Heading />
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