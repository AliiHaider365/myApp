import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';

import styles from './projects/firstappCss';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <Image style={styles.img1} source={require('./images/icon.png')}></Image>
            <Image style={styles.img2} source={require('./images/notification.png')}></Image>
          </View>
          <View style={styles.profile}>
            <Image style={styles.profileImage} source={require('./assets/pro.jpg')}></Image>
            <View style={{ flexDirection: "column", }}>
              <Text style={styles.profileHeading}>Hello,</Text>
              <Text style={styles.profileHeading1}>ALi Haider</Text>
            </View>
          </View>
          <View style={styles.div}>
            <ScrollView horizontal={true} style={{ marginTop:10, }}>
              <View style={styles.scroll} >
                <View style={styles.profileimg}>
                  <Image source={require('./images/dropbox.png')} style={styles.imgprofile}></Image>
                </View>
                <View style={styles.folder} >
                  <Image source={require('./images/folder1.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folder.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folderimg.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/add.png')} style={styles.img1profile}></Image>
                </View>
                <View style={styles.title}>
                  <Text style={styles.drop}>dropbox</Text>
                  <Text style={styles.titletext}>10/20GB</Text>
                  <View style={styles.bar}>
                    <View style={styles.inbar}></View>
                  </View>
                </View>
              </View>

              <View style={styles.scroll} >
                <View style={styles.profileimg}>
                  <Image source={require('./images/googledrive.png')} style={styles.imgprofile}></Image>
                </View>
                <View style={styles.folder} >
                  <Image source={require('./images/folder1.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folder.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folderimg.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/add.png')} style={styles.img1profile}></Image>
                </View>
                <View style={styles.title}>
                  <Text style={styles.drop}>dropbox</Text>
                  <Text style={styles.titletext}>10/20GB</Text>
                  <View style={styles.bar}>
                    <View style={styles.inbar}></View>
                  </View>
                </View>
              </View>

              <View style={styles.scroll} >
                <View style={styles.profileimg}>
                  <Image source={require('./images/dropbox.png')} style={styles.imgprofile}></Image>
                </View>
                <View style={styles.folder} >
                  <Image source={require('./images/folder1.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folder.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/folderimg.png')} style={styles.img1profile}></Image>
                  <Image source={require('./images/add.png')} style={styles.img1profile}></Image>
                </View>
                <View style={styles.title}>
                  <Text style={styles.drop}>dropbox</Text>
                  <Text style={styles.titletext}>10/20GB</Text>
                  <View style={styles.bar}>
                    <View style={styles.inbar}></View>
                  </View>
                </View>
              </View>




    
            </ScrollView>
          </View>
        </View>

        <View style={styles.bot}>
          <Text style={{fontSize:20,fontWeight: '700',marginLeft: 10,marginTop:10, color:'#fff'}}>Last File</Text>
          <ScrollView>
          <View style={styles.tab}>
            <Image source={require('./images/files.png')}
            style={styles.tabimg}></Image>
              <View style={{ flexDirection: "column", marginLeft:7,}}>
              <Text style={styles.tabHeading}>Cliant work.PDF</Text>
              <Text style={styles.tabHeading1}>Dropbox/projects/C:/CliantWork</Text>
            </View >
            <View style={styles.loading}>
            <Text style={styles.loadingText}> 100% </Text>
            </View>
          </View>

          <View style={styles.tab}>
            <Image source={require('./images/files.png')}
            style={styles.tabimg}></Image>
              <View style={{ flexDirection: "column", marginLeft:7,}}>
              <Text style={styles.tabHeading}>Cliant work.PDF</Text>
              <Text style={styles.tabHeading1}>Dropbox/projects/C:/CliantWork</Text>
            </View >
            <View style={styles.loading}>
            <Text style={styles.loadingText}> 100% </Text>
            </View>
          </View>
          <View style={styles.tab}>
            <Image source={require('./images/files.png')}
            style={styles.tabimg}></Image>
              <View style={{ flexDirection: "column", marginLeft:7,}}>
              <Text style={styles.tabHeading}>Cliant work.PDF</Text>
              <Text style={styles.tabHeading1}>Dropbox/projects/C:/CliantWork</Text>
            </View >
            <View style={styles.loading}>
            <Text style={styles.loadingText}> 100% </Text>
            </View>
          </View>
          <View style={styles.tab}>
            <Image source={require('./images/files.png')}
            style={styles.tabimg}></Image>
              <View style={{ flexDirection: "column", marginLeft:7,}}>
              <Text style={styles.tabHeading}>Cliant work.PDF</Text>
              <Text style={styles.tabHeading1}>Dropbox/projects/C:/CliantWork</Text>
            </View >
            <View style={styles.loading}>
            <Text style={styles.loadingText}> 45% </Text>
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
