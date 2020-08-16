import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 5,
    },
  
    productImage: {
        width: '100%',
        height: '45%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 5,
    },
  
    productName: {
        color: '#322153',
        fontSize: 28,
        fontFamily: 'Archivo_700Bold',
        marginTop: 16,
    },

    productItems: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 8,
        color: '#6C6C80'
    },

    view: {
        marginTop: 16,
    },
    
    title: {
        color: '#322153',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
  
    content: {
        fontFamily: 'Archivo_400Regular',
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80'
    },
});

export default styles;