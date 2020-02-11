import React from "react";
import { StyleSheet, Text, View ,ImageBackground,ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
// import styles from './projects/insata2CSS';



class App extends React.Component {
  state={
  fetch:[],
  }
  async componentDidMount(){
    await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(abc => abc.json())
    .then(xyz => this.setState({fetch:xyz}))
    }
    myData(){
      return this.state.fetch.map((val,ind)=>{
        return(
          <View style={styles.postView} key={ind}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('details',{postno:val.id})}}>
          <Text style={styles.postText}>{val.title} </Text>
          </TouchableOpacity>
          </View>
    

        )
      })
    }
  render() {
    return (
      <View style={styles.container}>
<LinearGradient 
colors={["#17e3f5","#206398","#3caea3"]} style={{flex:1,width: "100%",height: "100%",}}>
  <ScrollView 
  showsVerticalScrollIndicator={false}>
    {this.myData()}
  </ScrollView>

</LinearGradient>
        

      </View>
    );
  }
}


class s2 extends React.Component {
  state={
    mypost:"",
    postcard:"",
  }

 async componentDidMount(){
  this.setState({mypost:JSON.stringify(this.props.navigation.getParam('postno'))}) 
  await fetch("https://jsonplaceholder.typicode.com/post"+"/"+this.state.mypost+"\"  " )
  .then(abc => abc.json())
  .then(xyz => this.setState({postcard:xyz}))
}
  
  render() {
    return (
      <View style={styles.container}>
      <LinearGradient 
      colors={["#206398","#3caea3"]} style={{flex:1,width: "100%",height: "100%",}}>
      <Text>{this.state.postcard.body} </Text>
      {console.log(this.state.postcard)}
    <Text>{this.state.mypost}</Text>
      
      </LinearGradient>
        

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  // postView:{
  //   flex:1,
  // },
  postText:{
    fontSize:18,
    fontWeight:"700",
    padding:10,

  }
});

const first =createStackNavigator({
post:App,
details:s2,
});
const js =createAppContainer(first);
export default js;