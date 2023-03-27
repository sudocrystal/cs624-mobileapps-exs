// Listing 3.3 Creating the App component
/*
  Create a file called App.js and add the basic structure:
    A full-size view with StyleSheet
      A full-size scrollable view with fixing the double tab issue
        A view
*/

/*
  ScrollView
    a scrollable View component
    https://reactnative.dev/docs/scrollview#keyboardshouldpersisttaps
    keyboardShouldPersistTaps determines when the keyboard should stay visible after a tap.
    'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.

    https://blog.logicwind.com/keyboard-issues-in-scrollview/
    This property fixes the double tap issue and ensures that the keyboard doesn’t come in your way of tapping elsewhere on the screen.

  flex
    https://reactnative.dev/docs/flexbox
    flex will define how your items are going to “fill” over the available space along your main axis. 
    Space will be divided according to each element's flex property.

    flex:1 is a style value that makes the component fill the entire space of its parent container.

  React Color
    https://casesandberg.github.io/react-color/
*/


import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' 
                    style={styles.content}>
          <View>
            <Text>Listing 3.3!</Text>
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