import { View , Text , StyleSheet } from 'react-native'
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

class Std extends Component{
constructor()
{
    super()
    this.state=
    {
        name : 'wasi',
        age : '21' ,
        bestie : 'Syed Qasim Ali'
    }
}
render()
{
    return(
        <View>
            <Text style={styles.text}>My name is {this.state.name}</Text>
            <Text style={styles.text}>My age is {this.state.age}</Text>
            <Text style={styles.text}>My bestie is {this.state.bestie}</Text>
        </View>
    )

}
}
const styles = StyleSheet.create({
    text:
    {
        fontSize:30
    }
})
export default Std;