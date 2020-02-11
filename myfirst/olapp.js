
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,  TextInput, Button ,KeyboardAvoidingView,ScrollView, TouchableOpacity} from 'react-native';



export default class App extends React.Component {
  state={
    myname:'ALi haider',
    father:'amjad',
    phone:'0123456789',
  }
  render() {
    return (
      <View style={styles.container}>
<Text style7889
onPress={()=>{this.setState({myname:'loading',father:'loading',phone:'loading'})}}
  >{this.state.myname}</Text>
  <Text
onPress={()=>{this.setState({father:'loading'})}}
  >{this.state.father}</Text>
  <Text
onPress={()=>{this.setState({phone:'loading'})}}
  >{this.state.phone}</Text>
</View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    flex: 1,
    // padding:10,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: "center",


  },
})