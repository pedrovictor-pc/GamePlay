import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SingIn(){
    return(
        <View style={styles.container}>
            <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize suas {'\n'}
                    Jogatinas {'\n'}
                    Facilmente
                </Text>
            </View>
        </View>
    )
};
