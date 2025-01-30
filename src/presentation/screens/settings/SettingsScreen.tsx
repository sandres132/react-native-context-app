import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCounterStore } from '../../store/counter-store';

import { styles } from '../../../config';
import { useEffect } from 'react';

export const SettingsScreen = () => {

    const count = useCounterStore( state => state.count );
    const incrementBy = useCounterStore( state => state.incrementBy );

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        title: `Contador: ${ count }`
      })
    
    }, [count])
    

    return (
        <View style={ styles.container } >
            <Text style={ styles.title } >Count: { count }</Text>

            
            <Pressable
                style={ styles.primaryButton }
                onPress={ () => incrementBy(1) }
            >
                <Text>Incrementar</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => incrementBy(-1) }
            >
                <Text>Decrementar</Text>
            </Pressable>
        </View>
    )
}