import { useNavigation } from '@react-navigation/native';
import React  from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/icons/back.png';

import styles from './styles';

function PageHeader() {
    const navigation = useNavigation();

    function handleNavigateToRanking() {
        navigation.navigate('Ranking');;
    }

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton
                    onPress={handleNavigateBack}
                >
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <BorderlessButton
                    onPress={() => handleNavigateToRanking()}
                >
                    <Text style={styles.title}>Ranking</Text>
                </BorderlessButton>
            </View>
        </View>
    );
}

export default PageHeader;