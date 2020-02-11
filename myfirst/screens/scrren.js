import React from "react";
import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity } from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import login from "./screens/login";
import signup from "./screens/signUP";
import items from "./screens/item";
import itemsDe from "./screens/itemsDetails";
import cards from "./screens/ItemsCard";


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground  source={require('./images/backgraunds.jpeg')}style={styles.imageback} >
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
          <Image source={require('./images/study.png')} style={styles.logo}></Image>
          </TouchableOpacity>
          <Text style={styles.logotext}>studies</Text>
        </ImageBackground>

      

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around"
  },
imageback:{
  width:'100%',
  height: '100%',
  justifyContent:"center",
  alignItems:"center",
  display:"flex",
},
logo:{
  
  width:100,
  height: 100,
  padding:30,
},
logotext:{
  fontSize:22,
  fontWeight:"bold",
  color:"#fc7476",
},


});

const splash=createStackNavigator({
  Studies:App,
  Login:login,
  signUP:signup,
  Item:items,
  ItemsDetails:itemsDe,
  itemscard:cards,
});
const Mynew=createAppContainer(splash);
export default Mynew;