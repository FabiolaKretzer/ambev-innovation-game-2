import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import ProductItem, { Product } from '../../components/ProductItem';

import styles from './styles';

function Products() {
    const products = [
        {
            id: 0,
            name: 'Fusion Normal',
            image: 'https://www.supermercadorazia.com.br/storage/fotos_produtos/28708/2078d0fc30c592c55a105702b94e46e8.png',
            price: '5,00'
        },
        {
            id: 1,
            name: 'Guaraná Antarctica',
            image: 'https://static.carrefour.com.br/medias/sys_master/images/images/h8c/h90/h00/h00/15165939154974.jpg',
            price: '4,00'
        },
        {
            id: 2,
            name: 'Lipton Limão',
            image: 'https://araujo.vteximg.com.br/arquivos/ids/3738754-1000-1000/07891042005206.jpg?v=636092663616830000',
            price: '6,00'
        },
        {
            id: 3,
            name: 'Lipton Pêssego',
            image: 'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v4654806287575073880/products/177962_1_Cha-Pessego-Lipton-Ice-Tea-Lata-340ml.jpg&height=400&width=400',
            price: '6,00'
        }
    ];

    return (
        <>
            <PageHeader/>

            <ScrollView
                style={styles.productList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {products.map((product: Product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </ScrollView>
        </>
    );
}

export default Products;