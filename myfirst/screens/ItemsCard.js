import React from "react";
import { StyleSheet, Text, View ,ImageBackground, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import styles from './projects/insata2CSS';

class cards extends React.Component {
    state={
        user:[],
        mymodal:false,
    }

    async componentDidMount(){
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then(abc => abc.json())
        .then(use => this.setState({user:use}));
    };

    box(){
        return this.state.user.map((val,ind)=>{
            // console.log(val)
            return(
                <View style={styles.boxs} key={ind}> 
                    <View style={{flexDirection:"row",}}>
                    <Text style={styles.boxtext}> Name: </Text>
                    <Text style={styles.boxtext1}>{val.name}</Text>
                    {/* <Text onPress={()=>{this.setState({mymodal:!this.state.mymodal})}}> My Modal</Text> */}
                    </View>
                    {/* <Text onPress={()=>{this.setState({mymodal:!this.state.mymodal})}}> My Modal</Text>
                    <Modal
                    visible={this.state.mymodal}>
                      <View style={{flex:1,backgroundColor:"red",}}>
    
                      <Text style={{alignItems: "center",}} onPress={()=>{this.setState({mymodal:!this.state.mymodal})}}>modal</Text>
                      </View>
                     
                    </Modal> */}
                    <View style={{flexDirection:"row",}}>
                    <Text style={styles.boxtext}> Username: </Text>
                    <Text style={styles.boxtext1}>{val.username}</Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
                    <Text style={styles.boxtext}> Email: </Text>
                    <Text style={styles.boxtext1}>{val.email}</Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
                    <Text style={styles.boxtext}> Contact: </Text>
                    <Text style={styles.boxtext1}>{val.phone}</Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
                    <Text style={styles.boxtext}> City: </Text>
                    <Text style={styles.boxtext1}>{val.address.city}</Text>
                    </View>
                </View>
            )
        })
    }
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground  source={require('../images/backgraunds.jpeg')}style={styles.imageback}>
          
          <ScrollView style={{width:"100%", height:"100%"}}>
          {this.box()}
          </ScrollView>
</ImageBackground>
      </View>
    );
  }
}

export default cards;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  imageback:{
    width:'100%',
    height: '100%',
    // justifyContent:"center",
    alignItems:"center",
    display:"flex",
  },
  boxs:{
    width: "100%",
    margin:5,
    height: 270,
    backgroundColor:"#fc7476",
  },
  boxtext:{
      fontSize:22,
      fontWeight:"700",
      textAlign:"left",
      padding: 10,
  },
  boxtext1:{
    fontSize:20,
    fontWeight:"200",
    textAlign:"left",
    paddingTop: 10,
},
});