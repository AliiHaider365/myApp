
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
      display: 'flex',
      flexDirection: "column",
      flex: 1,
      
      alignItems: 'center',
      justifyContent: "center",
  
    },

    header:{
      width:'100%',
      flex:0.6,
      display:"flex",
      flexDirection:"row",
      
      justifyContent:'space-between',
      alignContent:'center',
      borderBottomColor:'black',
      borderStyle:'solid',
      borderBottomWidth:0.7,
    },
    headImg:{
      width:20,
      height:15, 
      padding:14,
      marginTop:14,
      marginRight:7,
      
    },
    insta:{
      marginLeft:30,
      marginTop:9,
      width:140,
      height:20,
      padding:20,
    
    },
    headtext:{
      fontSize:30,
     marginTop:9,
     fontWeight:"bold",
     marginLeft:80,
    },
    content:{
      width:'100%',
      display:'flex',
      flexDirection: "row",
      justifyContent:"center",
      flex:6,
  
      
    },

    user:{
      width:'100%',
      flex:0.6,
      flexDirection:'row',
      padding:5,
      marginBottom:4,
      borderTopColor:'black',
      borderTopWidth:0.8,
      borderStyle:'solid',
      
    },
    users:{
      width:20,
      height:20,
      padding:20,
      borderRadius:20,
      marginLeft:10,
      
      

    },
    usertext:{
      fontSize:20,
      marginLeft:12,
      marginTop:7,
      fontWeight:"400",

    },
    biamge:{
      width:'100%',
      
      flex:5, borderBottomWidth:4,
      borderStyle:'solid',
      borderBottomColor:'black',
      
    
      
     },
    bkimage:{
      
      padding:150,
      
      
      
    },
    like:{
      width:'100%',
      flex:0.6,
      flexDirection:'row',
      padding:5,
    },
    likes:{
      width:20,
      height:20,
      padding:15,
      marginLeft:10,},
info:{
  width:'100%',
  flex:1,
  flexDirection:"row",
  borderTopWidth:0.5,
  borderStyle:'solid',
  borderTopColor:'gray',
  padding:5,


},
blheart:{
  width:20,
  height:20,
  padding:2,
  marginLeft:10,
},

textt:{
  fontSize:13,
  marginLeft:10,
  fontWeight:"400",
},

    menu:{
      width:'100%',
      display:'flex',
      flex:0.608,
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
  export default styles;  