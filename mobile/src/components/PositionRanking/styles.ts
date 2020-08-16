import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rank: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#e6e6f0",
        borderRadius: 8,
        overflow: "hidden",
        paddingTop: 20,
        paddingBottom: 20,
    },

    position: {
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        lineHeight: 21,
        marginLeft: 16,
        color: '#6C6C80',
    },

    name: {
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        textAlign: 'center',
    },

    point: {
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        color: '#6C6C80',
        lineHeight: 21,
        textAlign: 'right',
        marginRight: 16,
    },
});

export default styles;