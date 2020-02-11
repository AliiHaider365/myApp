import React from "react";
import { StyleSheet, Text, View, ImageBackground,Image } from "react-native";
// import styles from './projects/insata2CSS';

class App extends React.Component {
  state = {
    myapp: [
      { name: "ali", rollno: "6062", city: "fsd" },
      { name: "Haider", rollno: "6061", city: "faisalabad" },
      { name: "Raza", rollno: "6032", city: "Lahore" },
      { name: "Hassan", rollno: "6021", city: "Islamabad" },
      { name: "Hassan", rollno: "6021", city: "peshawer" },
      { name: "Hassan", rollno: "6021", city: "Islamabad" },
      { name: "Hassan", rollno: "6021", city: "Islamabad" },
     
    ],
    
  };
  studentlist() {
    return this.state.myapp.map(val => {
      return (
        <View style={styles.detail} >
          <Text style={styles.text1}>
            {val.name + "  " + val.rollno + "  " + val.city}

          </Text>
          <Text>
    return{this.fullname()}
    </Text>
        </View>
      );
    });
   
  }
  
  render() {
    return <View style={styles.container}>
      {/* <View style={styles.tex}></View> */}
      {this.studentlist()}
      </View>;
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  text1: {
    margin: 10,
    // backgroundColor:'lightgray',
    fontSize:18,
    alignItems:"center",
    width:300,
  },
  detail:{
    backgroundColor: 'green',
    width:'100%',
    height:40,
    margin:10,
    alignItems:"center",
    justifyContent:"center",
  }
});




