
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,  TextInput, ScrollView, ImageStore, TouchableOpacity,} from 'react-native';
import styles from './projects/insata2CSS';

class App extends React.Component {
  
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headername}>Username</Text>
            <Image source={require('./assets/setting.png')} style={styles.headerImage}></Image>
        </View>

        <View style={styles.user}>
          <View style={styles.profile}>
            <View style={styles.prof}>
                <Image source={require('./assets/pro.jpg')} style={styles.profileImage}></Image>
                
                
              </View>
            <View style={styles.detail}>
            <Text style={styles.detailtext}>   2344   5445    657</Text>
            <Text style={styles.detailtext1 }>     post        followers    following</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{fontSize:17,textAlign:"center",fontWeight:'300',}}> Edit profile</Text>
            </TouchableOpacity>
            </View>
              </View>
          <View style={styles.info}>
            <Text style={{fontSize:18,marginLeft:10,}}>Your name</Text>
            <Text style={{fontSize:18,marginLeft:10,}}>Your bios goes here..</Text>
            <Text style={{fontSize:18,marginLeft:10,}}>and here to</Text>
          </View>


        </View>
        <View style={styles.midmenu}>
          
        <Image style={styles.menuimg} source={require('./assets/menu.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/list.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/placeholder.png')}></Image>
          <Image style={styles.menuimg} source={require('./assets/user.png')}></Image>
        </View>
        <View style={styles.content}>
        <ScrollView>
          <View style={styles.row}>
          <Image style={styles.rowImage} source={require('./assets/11.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/12.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/13.jpg')}></Image>
          </View>
          <View style={styles.row}>
          <Image style={styles.rowImage} source={require('./assets/14.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/15.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/16.jpg')}></Image>
          </View>
          <View style={styles.row}>
          <Image style={styles.rowImage} source={require('./assets/11.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/12.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/13.jpg')}></Image>
          </View>
          <View style={styles.row}>
          <Image style={styles.rowImage} source={require('./assets/14.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/15.jpg')}></Image>
          <Image style={styles.rowImage} source={require('./assets/16.jpg')}></Image>
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


