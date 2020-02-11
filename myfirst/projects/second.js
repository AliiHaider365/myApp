import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,} from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground style={styles.backimag} source={require("./assets/image.jpeg")}>

        <View style={styles.header}><Text style={styles.logo}>logo</Text>
        <View style={styles.list}>
          <Text style={styles.all}>Home</Text>
          <Text style={styles.all}>About</Text>
          <Text style={styles.all}>contact</Text>
          <Text style={styles.all}>Helps</Text>
          </View></View>

        <View style={styles.main1}>
          <View style={styles.div1}><Text style={styles.txt}>HEllo</Text></View>
          <View style={styles.div2}><Text style={styles.txt}>HEllo</Text></View>
        </View>
        <View style={styles.main1}>
          <View style={styles.div1}><Text style={styles.txt}>HEllo</Text></View>
          <View style={styles.div2}><Text style={styles.txt}>HEllo</Text></View>
        </View>




        </ImageBackground>

      </View >
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',


  },
  backimag:{
    width:"100%",
    height:"100%",

  },



  header: {

    
    width: "100%",
    height: 100,

    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: 0,
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-around",

  },
  logo: {
    marginTop: 12,
    marginLeft: 7,
    fontSize: 20,
    textTransform: "uppercase",
    
    fontWeight:"normal",
  },
  list:{
    
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"65%",
    marginTop:"2%",
    height:"20%",
    
    
  },
  all:{
    fontSize:15,
    
  },
  main1: {

    
    width: "100%",
    height: 200,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  div1: {
    
    width: "45%",
    height: "85%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    display:"flex",
    borderRadius:10,
    

  },
  div2: {
    
    width: "45%",
    height: "85%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius:10,

  },
  txt:{
    marginTop:"45%",
    marginLeft:"25%",
    fontSize:20,

  },

});