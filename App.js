import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Counter extends React.Component {

  constructor(props) {
    super(props); // ignore jslint error: https://stackoverflow.com/questions/63856962/understanding-why-super-is-deprecated-in-a-react-class-component
    this.state = {
      currentValue: this.props.start
    }
  }

  add = () => {
    this.setState({
        currentValue: this.state.currentValue + this.props.incr
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.counter}>
          {this.state.currentValue}
        </Text>
        <TouchableOpacity 
          onPress={this.add}>
          <Text style={styles.plusText}>
            +{this.props.incr}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Counter 
          incr={3}
          start={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 66,
    color: "red",
    backgroundColor: "blue",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  counter: {
    fontSize: 99,
    color: "blue",
    backgroundColor: "red",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 30
  }
});
