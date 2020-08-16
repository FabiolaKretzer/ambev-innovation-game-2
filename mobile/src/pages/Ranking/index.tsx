import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PositionRanking from '../../components/PositionRanking';

function Ranking() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" color="#8257e5" size={24}/>
            </TouchableOpacity>

            <Text style={styles.title}>
                Você está na 3ª colocação!
            </Text>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <PositionRanking
                    key={1}
                    valuePosition={1}
                    name="João da Silva"
                    point={150}
                />

                <PositionRanking
                    key={2}
                    valuePosition={2}
                    name="Maria Barbosa"
                    point={140}
                />

                <PositionRanking
                    key={3}
                    valuePosition={3}
                    name="Luana Visconde"
                    point={120}
                />
                
                <PositionRanking
                    key={4}
                    valuePosition={4}
                    name="Marcelo Alencar"
                    point={100}
                />

                <PositionRanking
                    key={5}
                    valuePosition={5}
                    name="Vitória Barbosa"
                    point={90}
                />

                <PositionRanking
                    key={6}
                    valuePosition={6}
                    name="Joaquim Vasconcelos"
                    point={80}
                />
            </ScrollView>
        </View>
    );
}

export default Ranking;