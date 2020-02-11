
import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,} from 'react-native';


class Myname extends React.Component{
render(){
    return(
<View style={styles.new}>
    <Text>{this.props.mynames}  {this.props.rollno} {this.props.fathername}{this.props.classes}</Text>

</View>
    );    
}
}
export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.tex1}>this is main </Text>
        <Myname
        mynames={' haider'}
        rollno={' 20'}
        fathername={' abc'}
        classes={' iqbal'}
        />
        <Myname
        mynames={' Raza'} 
        rollno={' 22'}
        fathername={' abc'}
        classes={' 9th'}
        />
        <Myname
        mynames={'SAud'}
        rollno={'32'}
        fathername={' abc'}
        classes={' 9th'}
        />
         <Myname
        mynames={'sagar'}
        rollno={' 420'}
        fathername={' abc'}
        classes={' 9th'}
        />
        

       
      </View >
      

    );
  }
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    flex: 1,
    backgroundColor:"green",
    alignItems: 'center',
    justifyContent:"center",


  },
  tex1:{fontSize:30,
  },
  new:{
    width:300,
    height:40,
    backgroundColor:"yellow",
    borderColor:"black",
    borderStyle:"solid",
    borderWidth:2,

  },
 
});
