import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import{ Product } from '../../components/ProductItem';

import styles from './styles';

interface Params {
    product_id: number
}

function DetailProduct() {
    const route = useRoute();

    const routeParams = route.params as Params;

    const [productSelect, setProductSelect] = useState<Product>({
        id: -1,
        name: '',
        image: 'https://avatars0.githubusercontent.com/u/19825481?s=460&v=4',
        price: ''
    },);

    const products = [
        {
            id: 0,
            name: 'Fusion Normal',
            image: 'https://www.supermercadorazia.com.br/storage/fotos_produtos/28708/2078d0fc30c592c55a105702b94e46e8.png',
            price: '5,00',
            description: 'Bebida energética que mistura taurina com a guaranina, a cafeína natural do guaraná.',
            ods: 'ODS1, ODS5, ODS7, ODS10',
            points: 40
        },
        {
            id: 1,
            name: 'Guaraná Antarctica',
            image: 'https://static.carrefour.com.br/medias/sys_master/images/images/h8c/h90/h00/h00/15165939154974.jpg',
            price: '4,00',
            description: 'O refrigerante que é coisa nossa, Original do Brasil.',
            ods: 'ODS3, ODS11, ODS16',
            points: 30
        },
        {
            id: 2,
            name: 'Lipton Limão',
            image: 'https://araujo.vteximg.com.br/arquivos/ids/3738754-1000-1000/07891042005206.jpg?v=636092663616830000',
            price: '6,00',
            description: 'Bebida à base de chá com sumo do limão.',
            ods: 'ODS1, ODS3, ODS12, ODS13, ODS14, ODS17',
            points: 60
        },
        {
            id: 3,
            name: 'Lipton Pêssego',
            image: 'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v4654806287575073880/products/177962_1_Cha-Pessego-Lipton-Ice-Tea-Lata-340ml.jpg&height=400&width=400',
            price: '6,00',
            description: 'Bebida à base de chá com sumo de pêssego.',
            ods: 'ODS4, ODS6, ODS8, ODS15, ODS17',
            points: 50
        }
    ];

    useEffect(() => {
        const object = products.find((product: Product) => product.id === routeParams.product_id);

        if(object != undefined)
            setProductSelect(object);
    }, []);

    return (
        <>
            <PageHeader/>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image 
                        style={styles.productImage} 
                        source={{ uri: productSelect.image }}
                    />

                    <Text style={styles.productName}>
                        {productSelect.name}
                    </Text>

                    <Text style={styles.productItems}>
                        {productSelect.description}
                    </Text>

                    <View style={styles.view}>
                        <Text style={styles.title}>
                            Lista de Objetivos de Desenvolvimento Sustentável
                        </Text>
                        <Text style={styles.content}>
                            {productSelect.ods}
                        </Text>
                    </View>

                    <View style={styles.view}>
                        <Text style={styles.title}>
                            {productSelect.points} Pontos
                        </Text>
                    </View>

                    <View style={styles.view}>
                        <Text style={styles.title}>
                            Preço R${productSelect.price}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default DetailProduct;