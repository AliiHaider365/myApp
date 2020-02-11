
import {StyleSheet} from 'react-native';
import { hide } from 'expo/build/launch/SplashScreen';

const styles1 = StyleSheet.create({

    container: {
      display: 'flex',
      flexDirection: "column",
      flex: 1,
      
      alignItems: 'center',
      justifyContent: "center",
      
  
    },

    header:{
      flex:0.9,
      
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderBottomColor:'black',
      borderBottomWidth:0.56,
      borderStyle:'solid',
    },
    headername:{
      fontSize:25,
      fontWeight:'500',
      marginTop:10,
      marginLeft:'30%',

    },
    headerImage:{
      width:20,
      height:20,
      padding:15,
      marginRight:10,
      marginTop:5,
    },

    user:{ 
      flex:3,
      
      width:'100%',
     },
     profile:{
       width:"100%",
      
       flex:1.3,
       flexDirection:"row",
     },
     prof:{ 
       width:'35%',
      
      //  height:40,
      //  padding:2,
      // borderRadius:20,
     },
     profileImage:{
       width:90,
       height:90,
      //  padding:3,
       marginTop:5,
       marginLeft:20,
       borderRadius:45,
      // overflow:hide,
     },
     detail:{
       width:'65%',
      
     },
     detailtext:{
       fontSize:20,
       fontWeight:'400',
       marginLeft:11,
       marginTop:10,
       marginBottom:0,
       
     },
     detailtext1:{
       fontSize:12,
       fontWeight:'200',
       marginLeft:15,
       marginTop:0,
       color:'gray',
     },

     btn:{width:"90%",
     height:30,
     backgroundColor:'lightgray',
     borderRadius:5,
    //  alignContent:"center",
     justifyContent:'center',
     marginLeft:10,
     marginTop:8,

    },
     info:{
      width:"100%",
      
      flex:1,
    },

    midmenu:{ 
      flex:0.7,
      
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around', 
      alignItems:'center',
      borderTopColor:"black",
      borderTopWidth:0.8,
      borderStyle:'solid',
    },

    content:{    
      flex:3.5,
      
      width:'100%',
    },
    row:{
      flex:1,
      flexDirection:'row',
      width:'100%',
      
    },
    rowImage:{
      width:106,
      height:103,
      borderWidth:1,
      borderStyle:"solid",
      borderColor:'white',

    },

  
     menu:{
      width:'100%',
      display:'flex',
      flex:0.670,
      flexDirection:'row',
      justifyContent:'space-around', 
      alignItems:'center',
      
      borderTopColor:'black',
      borderTopWidth:0.8,
      borderStyle:'solid',

    },
    menuimg:{
      width:25,
      height:20, 
      padding:15,
    },
  
  });
  export default styles1;  