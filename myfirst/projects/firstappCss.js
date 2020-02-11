
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3670e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",

    },
    top: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.89)',
        
        // backgroundColor: '#fffefe',
        flex: 1.3,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        // marginTop:16,
        flexDirection: "column",
    },
    header: {
        width: '100%',
        // backgroundColor:'pink',
        flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    img1: {
        width: 20,
        height: 20,
        padding: 3,
        marginTop: 30,
        marginLeft: 15,
    },
    img2: {
        width: 12,
        height: 12,
        padding: 12,
        marginTop: 20,
        marginRight: 15,
        backgroundColor: '#fff',
    },
    profile: {
        width: '100%',
        // backgroundColor:'blue',
        flex: 0.40,
        // alignItems:'center',
        // justifyContent: 'center',
        flexDirection: "row",


    },
    profileImage: {
        width: 25,
        height: 25,
        padding: 25,
        marginTop: 13,
        marginLeft: 30,
        borderRadius: 12.5,
    },
    profileHeading: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 15,
        marginLeft: 12,
        color: "lightgray"

    },
    profileHeading1: {
        fontSize: 20,
        marginLeft: 12,

    },
    div: {
        width: '100%',
        // backgroundColor:'brown',
        flex: 1.1,
        // borderRadius: 25,
        // borderBottomStartRadius:25,
        marginBottom: 10,

    },
    scroll: {
        width: 250,
        height: 170,
        backgroundColor: '#ffff',
        marginLeft: 20,
        borderRadius: 25,
        // flex: 1,

    },
    profileimg: {
        width: 50,
        height: 50,
        // backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 30,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'rgb(245,245,245)',
    },
    imgprofile: {
        width: 20,
        height: 20,
        padding: 20,
        // backgroundColor:'#fff',

    },
    folder: {
        width: 150,
        height: 20,
        flexDirection: 'row',
        marginTop: 10,
        opacity:0.67,
        marginLeft: 10,
    },

    img1profile: {
        width: 25,
        height: 25,
        padding: 15,
        marginLeft: 4,

    },
    title: {
        marginTop: 2,
        width: 200,
        height: 60,
        marginLeft: 10,
        // justifyContent:'center',
        // alignItems:"center",
        // backgroundColor:'#fff',
    },
    drop: {
        marginTop: 10,
        fontSize: 20,
        // marginTop:20,
        fontWeight: '700',
    },
    titletext: {
        fontSize: 11,
        textAlign: 'right',
        marginRight: 10,
        color: 'lightgray',
    },
    bar: {
        width: 180,
        height: 5,
        flexDirection: "row", 
        backgroundColor: 'lightgray',
        borderRadius: 3,
        marginLeft: 7,
        marginTop: 6,
    },
    inbar: {
        width: 100,
        height: 5,
        backgroundColor: 'yellow',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
    },



    bot: {
        width: '100%',
        // backgroundColor: 'green',
        flex: 1,
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
        alignItems:'center',
        justifyContent: 'center',
        
    },
loadingText: {
    fontSize: 8,
    color: '#e3ebfc',
        
        

    },
});
export default styles;