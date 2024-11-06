import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 8
    },
    input: {
        width: '90%',
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        marginLeft: '5%'
    },
    inputView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        paddingTop:30,
    },
    titleView: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingBottom:20
    },
    buttons: {
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    login: {
        width: '50%',
        margin: 10,
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center'
    }

})

export default styles;