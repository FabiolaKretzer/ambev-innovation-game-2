import React from'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapStores from './pages/MapStores';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >
                <AppStack.Screen name="MapStores" component={MapStores} />
                <AppStack.Screen name="Products" component={Products} />
                <AppStack.Screen name="DetailProduct" component={DetailProduct} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;