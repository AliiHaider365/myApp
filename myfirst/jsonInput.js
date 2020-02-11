import React from "react";
import { StyleSheet, Text, View ,ImageBackground, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TextInput } from "react-native-gesture-handler";
// import styles from './projects/insata2CSS';

class App extends React.Component {

  state={
    data:[],
    id:"",
  }
  async fetchData(){
   await fetch("https://jsonplaceholder.typicode.com/posts/8"+this.state.id)
    .then(josn=>josn.json())
    .then(abc=> this.setState({data:abc}))
  }
  showdata(){



   
      return(
        <View  style={styles.show}>
       <Text style={styles.btn1}> {this.state.data.title} </Text> 
       <Text style={styles.btn1}> {this.state.data.body} </Text> 

        </View>
      )
    
      
  

  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
        colors={["#29323c", "#485563"]}
        style={{flex:1,}}>
        <View style={styles.search}>
          <TextInput style={styles.searchbtn}
          label='hello'
          placeholder={"Enter Text"}
          value={this.state.id}
          onChangeText={(va)=>{this.setState({id:va})}}
          />
          <Text style={styles.btn} onPress={()=>{this.fetchData()}}> Search</Text>
        
        </View>
      <View style={{padding:10,}}>
        <ScrollView showsVerticalScrollIndicator="false">
        {this.showdata()}
        {console.log(this.state.id)}
        </ScrollView>
      </View>
      </LinearGradient>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
  },
  btn:{
    fontSize:22,
    fontWeight:"bold",
    marginTop:20,

  },
  searchbtn:{
    fontSize:22,
    fontWeight:"300",
    marginTop:20,
    height:40,
    width: 200,
    paddingLeft:10,
    padding:10,
    borderWidth: 1,
    marginLeft:10,
    borderRadius:10,
    
    

  },
  btn1:{
    fontSize:18,
    fontWeight:"500",
    marginTop:30,

  },
  search:{
    width: "100%",
    height:80,
    // backgroundColor:"yellow",
    // justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },})