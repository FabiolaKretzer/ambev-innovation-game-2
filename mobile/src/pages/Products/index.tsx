import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import ProductItem from '../../components/ProductItem';

import styles from './styles';

function Products() {
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
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </ScrollView>
        </>
    );
}

export default Products;