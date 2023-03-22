// Listing 2.3A Updating state - with setState(nextState)
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
    this.setState({
      year: 2017
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My name is: { this.state.name }</Text>
        <Text onPress={() => this.updateYear()}>
          The year is: { this.state.year }
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
      backgroundColor: '#00FFFF',
    }
  });

export default MyComponent;