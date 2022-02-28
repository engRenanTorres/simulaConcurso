import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    preencher: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    quadroVariavel:{
        textAlign:'center',
        borderColor: '#000',
        justifyContent: 'center',
    },
    linha:{ 
        width: Dimensions.get('window').width,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop:'25%'
    }
});
