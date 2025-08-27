import {View,StyleSheet, Text, TextInput} from 'react-native';

export default function App (){

    return(
        <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={styles.box2}>
                <Text style={styles.texto}>Hello World</Text>
            </View>
            <View style={styles.box3}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'black', justifyContent: 'center', alignItems:'center'},
    box1:{width:200,height:200,backgroundColor:'#89deffff'},
    box2:{width:200,height:200,backgroundColor:'#3eee56ff'},
    box3:{width:200,height:200,backgroundColor:'#cc2a2aff'},
    texto:{fontSize:40}
})