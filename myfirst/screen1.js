import React from "react";
import { StyleSheet, Text, View ,ImageBackground } from "react-native";
// import styles from './projects/insata2CSS';

class screeen1 extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    
    
  render() {
    return (
      <View style={styles.container}>

        <Text>hello first world</Text>

      </View>
    );
  }
}

export default screeen1;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around"
  },
});