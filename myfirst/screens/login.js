import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Button
} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

class login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/backgraunds.jpeg")}
          style={styles.imageback}
        >
          <Text style={styles.heading}>Login</Text>

          <TextInput style={styles.input1} 
             placeholder="Email"
             keyboardType="email-address"
             maxLength={25}
             onSubmitEditing={()=> this.passwarInput.focus()}
             returnKeyType="go" />

          <TextInput
            style={styles.input1}
            placeholder="Passward"
            secureTextEntry
            returnKeyType="go"
            ref={(input)=>this.passwarInput =input}
          />

          <View style={styles.btndiv}>
            <View style={styles.btn}>
              <Text style={styles.btnsty} onPress={()=> this.props.navigation.navigate('Item')} >Login</Text>
            </View>
            <View style={styles.btn}>
              <Text
                onPress={() => this.props.navigation.navigate("signUP")}
                style={styles.btnsty}
              >
                Sign UP
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default login;

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
  heading: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fc7476",
    // fontFamily: "Cochin"
    // fontFamily:'lucida grande',
  },
  input1: {
    width: 270,
    height: 50,
    backgroundColor: "#fff",
    fontSize: 19,
    fontWeight: "300",
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#540403"
  },
  btndiv: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    // backgroundColor: "red",
    // justifyContent:"center",
    // alignItems:"center",
    marginTop: 40
  },
  btn: {
    width: "35%",
    height: 40,
    backgroundColor: "#fc7476",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    // marginTop:20,
    borderRadius: 20
  },
  btnsty: {
    fontSize: 20,
    color: "white"
  }
});
