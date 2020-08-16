import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    description?: string;
    ods?: string;
    points?: number;
}

interface ProductProps {
    product: Product;
}

const ProductItem:React.FC<ProductProps> = ({ product }) => {
    const { navigate } = useNavigation();

    function handleNavigateToDetail(id: number) {
        navigate('DetailProduct', { product_id: id });
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: product.image }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{product.name}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {"  "}
                    <Text style={styles.priceValue}>R$ {product.price}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.contactButton, {backgroundColor: "#8257E5"}]}
                    onPress={() => handleNavigateToDetail(product.id)}
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