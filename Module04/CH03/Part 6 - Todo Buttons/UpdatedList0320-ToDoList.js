// Listing 3.20 Passing toggleComplete and deleteTodo as props to ToDo
// Listing 3.15 Creating the TodoList component
/*
  The TodoList component takes one property for now: an array of todos. 
  You then map over these todos and create a new Todo component (imported at the top of the file) for each todo, passing in the todo as a property to the Todo component. 
  You also specify a key and pass in the index of the todo item as a key to each component. 
  The key property helps React identify the items that have changed when the diff with the virtual DOM is computed. React will give you a warning if you leave this out.
*/
import React from 'react'
import { View } from 'react-native'

import Todo from './Todo'

/*
  map()
  https://www.w3schools.com/jsref/jsref_map.asp
  
*/

/*
  Pass toggleComplete and deleteTodo as props to the Todo component in the ToDoList component.
*/
const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
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