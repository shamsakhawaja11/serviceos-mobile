import { StyleSheet, TextInput, View, Text } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <View>
             <Text style={{color:'#ffffff'}}>Enter Email</Text>
            </View>
            <TextInput placeholder="sara@gmail.com"/>
            <Text>Enter Password</Text>
            <TextInput placeholder="*********"/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        width:'100',
        height:'100',
        padding:'25',
    }
})