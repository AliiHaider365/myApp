import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import styles from './projects/insata2CSS';

class itemsDe extends React.Component {
  state = {
    live: []
  };

  box2() {
    return this.state.live.map((val, ind) => {
      return (
        <View key={ind} style={styles.box}>
          <Image style={styles.box1} source={{ uri: val.url }} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("itemscard")}
          >
            <View style={styles.box2}>
              <Text
                onPress={() => this.props.navigation.navigate("itemscard")}
                style={{ fontSize: 20 }}
              >
                {val.title}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  }
  async componentDidMount() {
    // await fetch("https://jsonplaceholder.typicode.com/photos")
      await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ live: json }));
  }
  render() {
    // console.log(this.state.live);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/backgraunds.jpeg")}
          style={styles.imageback}
        >
          <ScrollView style={{ width: "100%", height: "100%" }}>
            {/* {this.box()} */}
            {this.box2()}
            <Text>hello first page</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default itemsDe;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  imageback: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  box: {
    width: "100%",
    height: 250,
    // backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box1: {
    width: "40%",
    height: "90%",
    // backgroundColor: "green",
    margin: 5,
    padding: 80
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: "blue"
  }
});
