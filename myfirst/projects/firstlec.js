import React from "react";
import { StyleSheet, Text, View ,ImageBackground} from "react-native";
import styles from './projects/insata2CSS';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>hello first page</Text>

      </View>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around"
  },

  hello: {
    fontSize: 150
  },

  div: {
    backgroundColor: "orange",
    width: 150,
    height: 150,
    borderRadius: 20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
  tex1: {
    marginTop: 60,
    marginLeft: 40,
    fontSize: 20
  },
  div1: {
    backgroundColor: "yellow",
    width: 150,
    height: 150,
    borderRadius: 20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  }
});
