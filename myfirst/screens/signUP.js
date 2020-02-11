import React from "react";
import { StyleSheet, Text, View ,ImageBackground, Button, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground  source={require('../images/backgraunds.jpeg')}style={styles.imageback}>
          <Text style={styles.textSign}>Sign Up</Text>
          <TextInput style={styles.inptext}
          placeholder="Username"/>
           <TextInput style={styles.inptext}
          placeholder="Email"
          keyboardType="email-address"
          maxLength={20}
          />
           <TextInput style={styles.inptext}
          placeholder="Passward"
          secureTextEntry/>
            <TextInput style={styles.inptext}
          placeholder="Contact"
          keyboardType="number-pad"/>
<Text style={styles.signbtn} onPress={()=> this.props.navigation.navigate("Login")} >Sign UP</Text>
        </ImageBackground>
      </View>
    );
  }
}


export default signup;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    // justifyContent: "center"
  },
  imageback:{
    width:'100%',
    height: '100%',
    // justifyContent:"center",
    alignItems:"center",
    display:"flex",
  },
  textSign:{
      fontSize:24,
      textAlign:"center",
      fontWeight:"bold",
      marginTop:10,
      color:"#fc7476",
      marginBottom: 20,
    //   fontFamily: 'arial, sans-serif',
        
  },
  inptext:{
      width:"90%",
      height: 50,
      backgroundColor: "#fff",
      padding: 10,
      fontSize:20,
      marginTop:15,
      borderRadius:20,
      borderWidth:1,
      borderColor:"#540403",
  },
  signbtn:{
      width:270,
    // height: 40,
      backgroundColor: "#591b1e",
      textAlign:"center",
      color:"#fff",
      fontSize:22,
      fontWeight:"600",
      borderRadius:30,
      padding: 10,
      marginTop:20,

  }
});