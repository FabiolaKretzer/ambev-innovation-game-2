import React  from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/icons/back.png';

import styles from './styles';

function PageHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Text style={styles.title}>Ranking</Text>
            </View>
        </View>
    );
}

export default PageHeader;