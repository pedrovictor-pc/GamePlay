import { StatusBar } from 'expo-status-bar';
import {View, Text, TextInput} from 'react-native';
import { stylesSingIn } from './styles';

export function SingIn (){
    return(
        <View style={stylesSingIn.container}>
            <Text style={stylesSingIn.texto}>Digite sua senha:</Text>
            <TextInput style={stylesSingIn.input}/>
        </View>
    )
}