// Listing 3.7 Creating the Input component
/*
  In the app folder, create a file called Input.js.
*/

import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

/*
  TextInput
    https://reactnative.dev/docs/textinput
    A foundational component for inputting text into the app via a keyboard.
    A placeholder to show text before the user starts to type
    A placeholderTextColor that styles the placeholder text
    A selectionColor that styles the cursor for the TextInput.


    If you’re familiar with web development, this is similar to an HTML input. 
    You also give both the TextInput and the outer View their own styling.
*/
const Input = () => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder='What needs to be done?'
      placeholderTextColor='#CACACA'
      selectionColor='#666666' />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default Input