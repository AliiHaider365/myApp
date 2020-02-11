import React, { Component } from 'react';
import { View, Text, Image, ScrollView, ImageBackground, } from 'react-native';
import styles from './projects/SecondAppCss';


export default class secondapp extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.top}>
          <View style={styles.arrowdiv}>
            <Image style={styles.arrowimg1} source={require('./images/arrow.png')}></Image>
            <Image style={styles.arrowimg2} source={require('./images/dp.jpg')}></Image>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.dp}>
              <Image source={require('./images/googledrive.png')} style={styles.dpimg} ></Image>
            </View>
            <View style={styles.dptextdiv}>
              <Text style={styles.dptext}>Google Drive </Text>
              <Text style={{ fontSize: 10, fontWeight: '400', marginLeft: 10, }}>Storage
             <Text style={{ fontSize: 10, fontWeight: '400', marginLeft: 20, marginTop: 10, }}>                                       8/15GB</Text></Text>

              <View style={styles.bar}>
                <View style={styles.inbar}></View>
              </View>
            </View>
          </View>

        </View>


        <View style={styles.bottom}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginLeft: 15, marginTop: 20, color:"#fff", }}>Folders</Text>

          <View style={{ width: '100%', height: 130, marginTop:10,}}>
            <ScrollView horizontal={true}>
              <View style={styles.scroll}>
                <View style={{ flexDirection: "row", marginTop: 10, }}><Image source={require('./images/folder1.png')}
                  style={styles.folderImg}></Image>
                  <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 5, }}> My Drive</Text>
                </View>
                <ScrollView horizontal={true}>
                  <View style={styles.box}>
                    <ImageBackground source={require('./assets/appimage.png')} style={styles.ImageBackgrounds} >
                      <Text style={styles.ImageText}>hello</Text>
                    </ImageBackground>
                  </View>
                  <View style={styles.box}>
                    <ImageBackground source={require('./assets/diamand.jpeg')} style={styles.ImageBackgrounds} >
                      <Text style={styles.ImageText}>hello</Text>
                    </ImageBackground>
                  </View>
                </ScrollView>
              </View>

              <View style={styles.scroll}>
                <View style={{ flexDirection: "row", marginTop: 10, }}><Image source={require('./images/folder1.png')}
                  style={styles.folderImg}></Image>
                  <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 5, }}> My Drive</Text>
                </View>
                <ScrollView horizontal={true} >
                  <View style={styles.box}>
                    <ImageBackground source={require('./assets/appimage.png')} style={styles.ImageBackgrounds} >
                      <Text style={styles.ImageText}>hello</Text>
                    </ImageBackground>
                  </View>
                  <View style={styles.box}>
                    <ImageBackground source={require('./assets/diamand.jpeg')} style={styles.ImageBackgrounds} >
                      <Text style={styles.ImageText}>hello</Text>
                    </ImageBackground>
                  </View>
                </ScrollView>

              </View>
            </ScrollView>
          </View>


          <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 15, marginTop: 10,color:'#fff',}}>Files</Text>

             <View>
                 <ScrollView horizontal={true} >
                   <View style={styles.box}>
                    <ImageBackground source={require('./assets/appimage.png')} style={styles.ImageBackgrounds} >
                    <Text style={styles.ImageText}>hello</Text>
                     </ImageBackground>
                  </View>
                  <View style={styles.box}>
                    <ImageBackground source={require('./assets/diamand.jpeg')} style={styles.ImageBackgrounds} >
                      <Text style={styles.ImageText}>hello</Text>
                    </ImageBackground>
                  </View>
                 </ScrollView>
             </View>



          
          <ScrollView>
            <View style={styles.tab}>
              <Image source={require('./images/files.png')}
                style={styles.tabimg}></Image>
              <View style={{ flexDirection: "column", marginLeft: 7, }}>
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
              <View style={{ flexDirection: "column", marginLeft: 7, }}>
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
              <View style={{ flexDirection: "column", marginLeft: 7, }}>
                <Text style={styles.tabHeading}>Cliant work.PDF</Text>
                <Text style={styles.tabHeading1}>Dropbox/projects/C:/CliantWork</Text>
              </View >
              <View style={styles.loading}>
                <Text style={styles.loadingText}> 100% </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
