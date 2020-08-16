import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function ProductItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://image.freepik.com/free-vector/woman-shopping-groceries-market_23-2148528362.jpg' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Nome do produto</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {"  "}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.contactButton, {backgroundColor: "#8257E5"}]}
                >
                    <Text style={styles.contactButtonText}>Detalhes</Text>
                </RectButton>

                <RectButton
                    style={[styles.contactButton, {backgroundColor: "#04d361"}]}
                >
                    <Text style={styles.contactButtonText}>Comprar</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default ProductItem;