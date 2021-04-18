import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  } from 'react-native'

  class App extends Component {
    state = {
      count: 0
    }
    onPress = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
    render(){
      return (
        <View style={styles.container}>
          <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
          >
           <Text style={styles.text}>Add</Text>

          </TouchableOpacity>
                 
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#16DB93',
      borderRadius: 8,
      marginBottom: 10,
      padding: 10,
    }
  })

  export default App;