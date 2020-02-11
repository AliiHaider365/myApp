import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        flex: 1,
    },

    top: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f7f7ff',
        // backgroundColor: 'green',
        flexDirection: 'column',
        // justifyContent:'center',
    },
    arrowdiv: {
        width: '100%',
        height: 30,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    arrowimg1: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },

    arrowimg2: {
        width: 20,
        height: 20,
        padding: 20,
        borderRadius: 10,
        marginRight: 20,
    },
    dp: {
        width: 70,
        height: 70,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70,
        marginTop: 10,
        marginLeft: 5,
    },


    dpimg: {
        width: 40,
        height: 40,

    },
    dptextdiv: {
        width: '70%',
        height: 70,
        // backgroundColor: 'pink',
        marginTop: 20,
        marginLeft: 12,
    },
    dptext: {
        fontSize: 20,
        fontWeight: 'bold',
    },


    bar: {
        width: 210,
        height: 5,
        flexDirection: "row",
        backgroundColor: 'lightgray',
        borderRadius: 3,
        marginLeft: 5,
        marginTop: 5,
    },
    inbar: {
        width: 100,
        height: 5,
        backgroundColor: 'orange',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
    },


    bottom: {
        width: "100%",
        backgroundColor: "#2d5ec1",
        flex: 3,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    scroll: {
        width: 200,
        height: 120,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginLeft: 20,
        borderRadius: 25,
        // backgroundColor: "#2d5ec1",
        // opacity:0.9,
    
        // flexDirection:'row',
        // flex: 1,
    },

    folderImg: {
        width: 15,
        height: 15,
        padding: 18,
        // opacity:0.9,
        marginLeft: 10,
    },

    box: {
        width: 60,
        height: 60,
        // backgroundColor: 'red',
        // borderRadius: 20,
        marginTop: 10,
        marginLeft: 15,
        justifyContent:'space-around',
        // padding: 50,



    },
ImageBackgrounds:{
    flex: 1, 
    // width: 60,
    opacity:0.9,
},
    ImageText:{
        fontSize:10, 
    backgroundColor: '#3670e5',
     marginTop:55,
      textAlign:"center", 
    //   opacity:0.8,
    } ,

    boximg: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,



    },

    tab: {
        marginLeft: 10,
        borderRadius: 10,
        width: 300,
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 10,


    },
    tabimg: {
        width: 20,
        height: 20,
        padding: 15,
        marginLeft: 15,
    },
    tabHeading: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fdfdfd',

    },
    tabHeading1: {
        fontSize: 10,
        fontWeight: '400',
        color: 'gray',
        marginTop: 7,
    },
    loading: {
        width: 35,
        height: 35,
        borderRadius: 18,
        borderColor: '#f8ce17',
        borderWidth: 3,
        borderStyle: 'solid',
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    loadingText: {
        fontSize: 8,
        color: '#e3ebfc',



    },


});
export default styles;