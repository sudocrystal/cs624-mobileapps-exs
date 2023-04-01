// Listing 3.15 Creating the TodoList component
/*
  Now that you’re adding todos to the array of todos, you need to render them to the screen. 
  To get started with this, you need to create two new components: TodoList and Todo. 
  
  TodoList will render the list of Todos and will use the Todo component for each individual todo. 
  The TodoList component takes one property for now: an array of todos. 
    You then map over these todos and create a new Todo component (imported at the top of the file) for each todo, 
      passing in the todo as a property to the Todo component. 
    You also specify a key and pass in the index of the todo item as a key to each component. 
    The key property helps React identify the items that have changed when the diff with the virtual DOM is computed. 
    React will give you a warning if you leave this out.
*/
import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={todo.todoIndex}
        todo={todo} />
    )
  })
  
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList