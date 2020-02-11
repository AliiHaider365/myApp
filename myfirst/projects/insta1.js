
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,  TextInput, ScrollView, ImageStore, TouchableOpacity,} from 'react-native';
import styles from './insata1CSS.js';


export default class App extends React.Component {
  
  render() {
    return (

      <View style={styles.container}>
         <View style={styles.header}>
          <Image source={require('./assets/camra.png')} style={{   width:25,  height:20,  padding:15, marginTop:10,marginLeft:12,}}
          ></Image>
          <Image source={require('./assets/headerr.png')} style={styles.insta}></Image>
          <Image source={require('./assets/share.png')} style={styles.headImg}></Image>
        </View>
        <View style={styles.content}>
          <ScrollView>

            <View style={styles.user}>
              <Image source={require('./assets/profile3.jpeg')} style={styles.users}></Image>
              <Text style={styles.usertext} >USERNAME</Text>
             </View> 

             <View style={styles.bimage}>
              <ImageBackground source={require('./assets/img1.jpeg')} style={styles.bkimage}>
              </ImageBackground>
              </View>
             

            <View style={styles.like}>
              <TouchableOpacity>
              <Image source={require('./assets/heart.png')} style={styles.likes}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('./assets/comment.png')} style={styles.likes}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('./assets/share.png')} style={styles.likes}></Image>
              </TouchableOpacity>
              
            </View>

            <View style={styles.info}>
              <Image source={require('./assets/blackheart.png')} style={styles.blheart}></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>
            

            <View style={styles.user}>
              <Image source={require('./assets/profile2.jpeg')} style={styles.users}></Image>
              <Text style={styles.usertext} >USERNAME</Text>
             </View> 

             <View style={styles.bimage}>
              <ImageBackground source={require('./assets/img2.jpg')} style={styles.bkimage}>
              </ImageBackground>
              </View>
             

            <View style={styles.like}>
              <Image source={require('./assets/heart.png')} style={styles.likes}></Image>
              <Image source={require('./assets/comment.png')} style={styles.likes}></Image>
              <Image source={require('./assets/share.png')} style={styles.likes}></Image>
            </View>

            <View style={styles.info}>
              <Image source={require('./assets/blackheart.png')} style={styles.blheart}></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>
            


            <View style={styles.user}>
              <Image source={require('./assets/profile1.jpeg')} style={styles.users}></Image>
              <Text style={styles.usertext} >USERNAME</Text>
             </View> 

             <View style={styles.bimage}>
              <ImageBackground source={require('./assets/img.jpg')} style={styles.bkimage}>
              </ImageBackground>
              </View>
             

            <View style={styles.like}>
              <Image source={require('./assets/heart.png')} style={styles.likes}></Image>
              <Image source={require('./assets/comment.png')} style={styles.likes}></Image>
              <Image source={require('./assets/share.png')} style={styles.likes}></Image>
            </View>

            <View style={styles.info}>
              <Image source={require('./assets/blackheart.png')} style={styles.blheart}></Image>
              <Text style={styles.textt}> 22 likes</Text>
            </View>
            
          </ScrollView>
        </View>
        <View style={styles.menu}>
          <Image style={styles.menuimg} source={require('./assets/house.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/search.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/camra.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/heart.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/user.png')}></Image>
        </View>
      </View >


    );
  }
}


