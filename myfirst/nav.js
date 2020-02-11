
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,  TextInput, Button ,KeyboardAvoidingView,ScrollView, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Screen1 extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text
        onPress={() => this.props.navigation.navigate('About')}
        >
          Screent 1 is displaying
        </Text>
      </View>

    );
  }
}

class Screen2 extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Screent 2 is displaying
        </Text>
      </View>

    );
  }
}
const myNav = createStackNavigator({
  Home:Screen1,
  About:Screen2,
});
const myApp = createAppContainer(myNav);
export default myApp;



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