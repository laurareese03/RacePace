import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: false,
      isEnabled: true,
      cadence: null,
      time: null,
      intervals: []
    };
  }

  toggleSwitch() {
    this.setState({ isEnabled: !this.state.isEnabled });
  }

  addNewInterval(cadence, time) {
    this.setState({ intervals: [...this.state.intervals, cadence, time]});
  }

  printText() {
    this.setState({ displayText: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.intervals}</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder='Cadence (BPM)' 
          onChangeText={(text) => this.setState({ cadence: text })}/>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder='Time (in seconds)' 
          onChangeText={(text) => this.setState({ time: text })}/>
        <Button 
          title='Press here to add an interval' 
          color='green'
          onPress={() => this.addNewInterval(this.state.cadence, this.state.time)} />
        {this.state.displayText && <Text style={{}}>Yeehaw</Text>}
        {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => this.toggleSwitch()}
        value={this.state.isEnabled}
      /> */}
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Views;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
