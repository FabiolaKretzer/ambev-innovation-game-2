import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20,
    },
  
    title: {
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        marginTop: 24,
    },
  
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Archivo_400Regular',
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
        marginBottom: 10,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80, 
    },
  
    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },
  
    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Archivo_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
    },
});

export default styles;