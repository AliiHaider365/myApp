
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,  TextInput, Button ,KeyboardAvoidingView,ScrollView, TouchableOpacity} from 'react-native';



export default class App extends React.Component {
  onpressButton(){
    alert('YOU LOGIN this page')
  }
  render() {
    return (

      <KeyboardAvoidingView  behavior="padding" style={styles.container}>
        <ImageBackground style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center',
          justifyContent: "center",
        }} source={require('./assets/images.jpeg')}>
          <View style={styles.div1}>
            <Text style={{ fontSize: 20, fontWeight:"700", marginTop: 30,color:'#ffff',}}>LOGIN </Text>
            <TextInput style={styles.inp}
              placeholder=" USERNAME"
              placeholderTextColor="#fff"
              onSubmitEditing={()=> this.passwarInput.focus()}
              returnKeyType="next" />

            <TextInput style={styles.inp}
              placeholder=" PASSWARD" 
              placeholderTextColor="#fff"
              returnKeyType="go"
              ref={(input)=>this.passwarInput =input}
              secureTextEntry
              />

              <TouchableOpacity onPress={this.onpressButton} style={styles.btntext1}>
          <Text style={styles.btn}  > LOGIN </Text>
          </TouchableOpacity>


          </View>
        </ImageBackground>

      </KeyboardAvoidingView >


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
  div1: {
    width: '80%',
    height: 400,
    backgroundColor: 'rgba(43,108,138,0.7)',
    // backgroundColor: '#fff5ee',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',



  },
  inp: {
    width: '90%',
    // backgroundColor:'lightblue',
    padding: 10,
    marginTop: 16,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    fontSize: 15,
    fontWeight:"500",
    color: '#fff',

  },
  btn: {
    padding:2,
    color:'#fff',
    textAlign:"center",
    fontWeight:"400",
  },
  btntext1:{
    
     margin:10,
      width:'80%',
      height:30,
      backgroundColor:'rgba(5,54,103,1)',
    justifyContent:'center',
    alignItems:"center",
     
     

     
  },
});
