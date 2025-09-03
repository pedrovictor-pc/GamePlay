import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';
import { stylesSingIn } from './styles';

export function SingIn (){
    return(
        <View style={stylesSingIn.container}>
            <Text>Aqui será construído a tela de entrada.</Text>
        </View>
    )
}