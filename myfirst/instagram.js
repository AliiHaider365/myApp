import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  ImageStore,
  TouchableOpacity
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import styles from './projects/insata2CSS';
import styles1 from "./projects/insata2CSS";
import styles from "./projects/insata1CSS";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/camra.png")}
            style={{
              width: 25,
              height: 20,
              padding: 15,
              marginTop: 10,
              marginLeft: 12
            }}
          ></Image>
          <Image
            source={require("./assets/headerr.png")}
            style={styles.insta}
          ></Image>
          <Image
            source={require("./assets/share.png")}
            style={styles.headImg}
          ></Image>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.user}>
              <Image
                source={require("./assets/profile3.jpeg")}
                style={styles.users}
              ></Image>
              <Text style={styles.usertext}>USERNAME</Text>
            </View>

            <View style={styles.bimage}>
              <ImageBackground
                source={require("./assets/img1.jpeg")}
                style={styles.bkimage}
              ></ImageBackground>
            </View>

            <View style={styles.like}>
              <TouchableOpacity>
                <Image
                  source={require("./assets/heart.png")}
                  style={styles.likes}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("./assets/comment.png")}
                  style={styles.likes}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("./assets/share.png")}
                  style={styles.likes}
                ></Image>
              </TouchableOpacity>
            </View>

            <View style={styles.info}>
              <Image
                source={require("./assets/blackheart.png")}
                style={styles.blheart}
              ></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>

            <View style={styles.user}>
              <Image
                source={require("./assets/profile2.jpeg")}
                style={styles.users}
              ></Image>
              <Text style={styles.usertext}>USERNAME</Text>
            </View>

            <View style={styles.bimage}>
              <ImageBackground
                source={require("./assets/img2.jpg")}
                style={styles.bkimage}
              ></ImageBackground>
            </View>

            <View style={styles.like}>
              <Image
                source={require("./assets/heart.png")}
                style={styles.likes}
              ></Image>
              <Image
                source={require("./assets/comment.png")}
                style={styles.likes}
              ></Image>
              <Image
                source={require("./assets/share.png")}
                style={styles.likes}
              ></Image>
            </View>

            <View style={styles.info}>
              <Image
                source={require("./assets/blackheart.png")}
                style={styles.blheart}
              ></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>

            <View style={styles.user}>
              <Image
                source={require("./assets/profile1.jpeg")}
                style={styles.users}
              ></Image>
              <Text style={styles.usertext}>USERNAME</Text>
            </View>

            <View style={styles.bimage}>
              <ImageBackground
                source={require("./assets/img.jpg")}
                style={styles.bkimage}
              ></ImageBackground>
            </View>

            <View style={styles.like}>
              <Image
                source={require("./assets/heart.png")}
                style={styles.likes}
              ></Image>
              <Image
                source={require("./assets/comment.png")}
                style={styles.likes}
              ></Image>
              <Image
                source={require("./assets/share.png")}
                style={styles.likes}
              ></Image>
            </View>

            <View style={styles.info}>
              <Image
                source={require("./assets/blackheart.png")}
                style={styles.blheart}
              ></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.menu}>
          <Image
            style={styles.menuimg}
            source={require("./assets/house.png")}
          ></Image>
          <Image
            style={styles.menuimg}
            source={require("./assets/search.png")}
          ></Image>
          <Image
            style={styles.menuimg}
            source={require("./assets/camra.png")}
          ></Image>
          <Image
            style={styles.menuimg}
            source={require("./assets/heart.png")}
          ></Image>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("About")}
          >
            <Image
              style={styles.menuimg}
              source={require("./assets/user.png")}
              onPress={() => this.props.navigation.navigate("About")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class user extends React.Component {
  render() {
    return (
      <View style={styles1.container}>
        <View style={styles1.header}>
          <Text style={styles1.headername}>Username</Text>
          <Image
            source={require("./assets/setting.png")}
            style={styles1.headerImage}
          ></Image>
        </View>

        <View style={styles1.user}>
          <View style={styles1.profile}>
            <View style={styles1.prof}>
              <Image
                source={require("./assets/pro.jpg")}
                style={styles1.profileImage}
              ></Image>
            </View>
            <View style={styles1.detail}>
              <Text style={styles1.detailtext}> 2344 5445 657</Text>
              <Text style={styles1.detailtext1}> post followers following</Text>
              <TouchableOpacity style={styles1.btn}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: "center",
                    fontWeight: "300"
                  }}
                >
                  {" "}
                  Edit profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles1.info}>
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Your name</Text>
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              Your bios goes here..
            </Text>
            <Text style={{ fontSize: 18, marginLeft: 10 }}>and here to</Text>
          </View>
        </View>
        <View style={styles1.midmenu}>
          <Image
            style={styles1.menuimg}
            source={require("./assets/menu.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/list.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/placeholder.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/user.png")}
          ></Image>
        </View>
        <View style={styles1.content}>
          <ScrollView>
            <View style={styles1.row}>
              <Image
                style={styles1.rowImage}
                source={require("./assets/11.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/12.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/13.jpg")}
              ></Image>
            </View>
            <View style={styles1.row}>
              <Image
                style={styles1.rowImage}
                source={require("./assets/14.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/15.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/16.jpg")}
              ></Image>
            </View>
            <View style={styles1.row}>
              <Image
                style={styles1.rowImage}
                source={require("./assets/11.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/12.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/13.jpg")}
              ></Image>
            </View>
            <View style={styles1.row}>
              <Image
                style={styles1.rowImage}
                source={require("./assets/14.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/15.jpg")}
              ></Image>
              <Image
                style={styles1.rowImage}
                source={require("./assets/16.jpg")}
              ></Image>
            </View>
          </ScrollView>
        </View>

        <View style={styles1.menu}>
          <Image
            style={styles1.menuimg}
            source={require("./assets/house.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/search.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/camra.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/heart.png")}
          ></Image>
          <Image
            style={styles1.menuimg}
            source={require("./assets/user.png")}
          ></Image>
        </View>
      </View>
    );
  }
}

const myNav = createStackNavigator({
  Home: App,
  About: user
});
const myApp = createAppContainer(myNav);
export default myApp;
