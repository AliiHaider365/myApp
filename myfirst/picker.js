import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  TouchableOpacity,
  Picker,
  PickerItem
} from "react-native";
import{createAppContainer}from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import myApp from "./nav";
 class screen1 extends React.Component {
  state = {
    mylang: "conti",
  };
  render() {
    return (
      <ImageBackground source={require("./assets/images.jpeg")} style={styles.container}>
        <View style={styles.container}>
          <Picker
            mode="dialog"
            style={{ width: 200, backgroundColor: "lightgray" }}
            selectedValue={this.state.mylang}
            onValueChange={listnewvalue => {
              this.setState({ mylang: listnewvalue });
            }}
          >
            <Picker.Item label="Continent" value="conti" />
            <Picker.Item label="Asia" value="asia" />
            <Picker.Item label="Africa" value="africa" />
            <Picker.Item label="Europ" value="gfb" />
            <Picker.Item label="North America" value="norAmer" />

          </Picker>
          <Text style={styles.texts}
             onPress={()=>this.props.navigation.navigate('country')} >ok </Text>
             
                </View>
      </ImageBackground>
    );
  }
}
 class screen2 extends React.Component {
  state = {
    mylang: "coun",
  };
  render() {
    return (
      <ImageBackground source={require("./assets/images.jpeg")} style={styles.container}>
        <View style={styles.container}>
          <Picker
            mode="dialog"
            style={{ width: 200, backgroundColor: "lightgray" }}
            selectedValue={this.state.mylang}
            onValueChange={listnewvalue => {
              this.setState({ mylang: listnewvalue });
            }}
          >
            <Picker.Item label="country" value="coun" />
            <Picker.Item label="Pakistan" value="pk" />
            <Picker.Item label="india" value="gfb" />
            <Picker.Item label="Afganistan" value="afg" />
            <Picker.Item label="China" value="chin" />


          </Picker>
            <Text style={styles.texts}
             onPress={()=>this.props.navigation.navigate('city')} >ok </Text>
             </View>
      </ImageBackground>
    );
  }
}
class screen3 extends React.Component {
  state = {
    mylang: "city",
  };
  render() {
    return (
      <ImageBackground source={require("./assets/images.jpeg")} style={styles.container}>
        <View style={styles.container}>
          <Picker
            mode="dialog"
            style={{ width: 200, backgroundColor: "lightgray" }}
            selectedValue={this.state.mylang}
            onValueChange={listnewvalue => {
              this.setState({ mylang: listnewvalue });
            }}
          >
            <Picker.Item label="City" value="city" />
            <Picker.Item label="Lahore" value="lhr" />
            <Picker.Item label="Karachi" value="gfb" />
            <Picker.Item label="peshawar" value="psh" />
            <Picker.Item label="Faisalabad" value="fsd" />


          </Picker>
            <Text style={styles.texts}
             onPress={()=>this.props.navigation.navigate('detail')} >ok </Text>
             </View>
      </ImageBackground>
    );
  }
}




const myNavs= createStackNavigator({
  Continent:screen1,
  country:screen2,
  city:screen3,
  
});

const MyApps= createAppContainer(myNavs);
export default MyApps;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  texts:{
    fontSize:22,
    color:'white',
    backgroundColor:'gray',
    padding:20,
    marginTop:10,
    borderRadius:15,
  }
});
