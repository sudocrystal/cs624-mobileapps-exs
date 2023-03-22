// Listing 2.4 Forcing rerender with forceUpdate() 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      year: 2016,
      name: 'Nader Dabit',
      colors: ['blue']
    }
  }

  updateYear() {
    this.state.year = 2017 
  }

  update() {
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My name is: { this.state.name }</Text>
        <Text
            onPress={() => this.updateYear()}>
            The year is: { this.state.year }
        </Text>
        <Text
           onPress={ () => this. update () }>
            Force Update
        </Text>
        <Text>My colors are { this.state.colors[0] }</Text>
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