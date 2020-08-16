import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface PositionProps {
    valuePosition: number;
    name: string;
    point: number;
}

const PositionRanking:React.FC<PositionProps> = ({ valuePosition, name, point }) => {
    return (
        <View style={styles.rank}>
            <Text style={styles.position}>
                {valuePosition}º
            </Text>

            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.point}>
                {point}
            </Text>
        </View>
    );
}

export default PositionRanking;