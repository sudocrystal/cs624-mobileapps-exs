// Listing 3.17 Adding toggleComplete and deleteTodo functions
/*
  The next steps are to mark a todo as complete and to delete a todo. 
  Open App.js and create toggleComplete and deleteTodo functions below the submitTodo function. 
  toggleComplete will toggle whether the todo is complete, and deleteTodo will delete the todo.
*/
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import Heading from './app/Heading'
import Input from './app/Input'
import Button from './app/Button'
import TodoList from './app/TodoList'

let todoIndex = 0

/*
  Binds the toggleComplete method to the class in the constructor.
  Binds the deleteTodo method to the class in the constructor.
*/
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)

    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  /*
    JavaScript Array filter()
    https://www.w3schools.com/jsref/jsref_filter.asp
    
    Strict inequality
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality
    the strict inequality operator always considers operands of different types to be different.
  */

  /*
    deleteTodo takes the todoIndex as an argument, filters the todos to return all 
    but the todo with the index that was passed in, and then resets the state to the remaining todos.
  */
  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  
  /*
    Strict equality
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
  */

  /*
    toggleComplete also takes the todoIndex as an argument, and loops through the todos until it finds the todo with the given index. 
    It changes the complete Boolean to the opposite of complete’s current setting, and then resets the state of the todos.

    https://chat.openai.com/chat
    This is a method that toggles the completion status of a todo item in a React component's state.
    
    Here's how it works:
    The method takes in a todoIndex parameter, which presumably identifies the todo item that the user wants to toggle.
    It creates a local variable todos and sets it equal to the todos array that's currently stored in the component's state.
    It then calls the forEach() method on todos, which allows it to loop over each element in the array.
    For each todo in todos, it checks whether the todoIndex of the todo matches the todoIndex parameter that was passed into the method.
    If there is a match, it toggles the complete property of the todo using the ! operator, which switches it from true to false or vice versa.
    Finally, it calls the setState() method on the component and passes in an object with a single key-value pair: todos, which is a reference to the updated todos array.
    Overall, this method is a common pattern for updating the state of a React component. It first makes a copy of the state array, loops over it to find the matching element, updates the element, and then sets the updated array back to the state. This ensures that the component is updated with the new state and that React's rendering system will re-render any affected components to reflect the changes.
  */
  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  
  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  render() {
    const { inputValue, todos } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue} 
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            todos={todos} />
          <Button submitTodo={this.submitTodo} />
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