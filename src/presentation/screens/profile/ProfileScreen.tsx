import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/Profile-store';

export const ProfileScreen = () => {

    const name = useProfileStore( state => state.name );
    const email = useProfileStore( state => state.email );
    const changeProfile = useProfileStore( state => state.changeProfile );

    return (
        <View style={ styles.container } >
            <Text style={ styles.title } >{ name }</Text>
            <Text style={ styles.title } >{ email }</Text>


            <Pressable
                style={ styles.primaryButton }
                onPress={ () => useProfileStore.setState({ name: 'Andres Sorto' }) }
            >
                <Text>Cambiar nombre</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => useProfileStore.setState({ email: 'andres.sorto@google.com' }) }
            >
                <Text>Cambiar email</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => changeProfile( 'John', 'john.doe@google.com' ) }
            >
                <Text>Regresar a John</Text>
            </Pressable>
        </View>
    )
}