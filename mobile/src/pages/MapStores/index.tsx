import React from 'react';
import { Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function MapStores() {
    const { navigate } = useNavigation();

    function handleNavigateToProducts(id: number) {
        navigate('Products', { store_id: id });
    }

    return (
        <>
            <PageHeader/>

            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem-vindo(a)...
                </Text>

                <Text style={styles.description}>
                    Encontre um ponto de venda Ambev.
                </Text>
            
                <View style={styles.mapContainer}>
                    <MapView 
                        style={styles.map}
                        initialRegion={{
                            latitude: -27.600994,
                            longitude: -48.529099,
                            latitudeDelta: 0.04,
                            longitudeDelta: 0.04
                        }} 
                    >
                        <Marker
                            onPress={() => handleNavigateToProducts(1)}
                            style={styles.mapMarker}
                            coordinate={{
                                latitude: -27.603994,
                                longitude: -48.516099,
                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image style={styles.mapMarkerImage} source={{ uri: 'https://image.freepik.com/free-vector/woman-shopping-groceries-market_23-2148528362.jpg' }}/>  
                                <Text style={styles.mapMarkerTitle}>
                                    Mercado do Zé
                                </Text>
                            </View>
                        </Marker>

                        <Marker
                            onPress={() => handleNavigateToProducts(2)}
                            style={styles.mapMarker}
                            coordinate={{
                                latitude: -27.616994,
                                longitude: -48.522099,
                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image style={styles.mapMarkerImage} source={{ uri: 'https://image.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148549788.jpg' }}/>  
                                <Text style={styles.mapMarkerTitle}>
                                    SuperMarket
                                </Text>
                            </View>
                        </Marker>
                    </MapView>
                </View>
            </View>

        </>
    );
}

export default MapStores;