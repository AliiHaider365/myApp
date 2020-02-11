import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import styles from './projects/insata2CSS';

class items extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/backgraunds.jpeg")}
          style={styles.imageback}
        >
          <View style={styles.viewrow}>
            
              <TouchableOpacity style={styles.innerrows} onPress={()=>this.props.navigation.navigate('ItemsDetails')}>
                <View style={styles.innerrow}>
              <Text style={styles.itemsText}onPress={()=>this.props.navigation.navigate('ItemsDetails')} >Items</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.innerrows} onPress={()=>this.props.navigation.navigate('ItemsDetails')}>
                <View style={styles.innerrow}>
              <Text style={styles.itemsText}onPress={()=>this.props.navigation.navigate('ItemsDetails')} >Items</Text>
              </View>
              </TouchableOpacity>
          </View>     
          <View style={styles.viewrow}>
            
            <TouchableOpacity style={styles.innerrows} onPress={()=>this.props.navigation.navigate('ItemsDetails')}>
                  <View style={styles.innerrow}>
                <Text style={styles.itemsText}onPress={()=>this.props.navigation.navigate('ItemsDetails')} >Items</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerrows} onPress={()=>this.props.navigation.navigate('ItemsDetails')}>
              <View style={styles.innerrow}>
            <Text style={styles.itemsText}onPress={()=>this.props.navigation.navigate('ItemsDetails')} >Items</Text>
            </View>
            </TouchableOpacity>
        </View>      
          </ImageBackground>
      </View>
    );
  }
}

 export default items;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  imageback: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  viewrow: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  innerrow: {
    width: "45%",
    height: "90%",
    backgroundColor: "#fc7476",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  innerrows: {
    width: 150,
    height: "90%",
    backgroundColor: "#fc7476",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  itemsText:{
      fontSize:22,
      color:"#fff",
    //   fontFamily:"arial",
  }
});
