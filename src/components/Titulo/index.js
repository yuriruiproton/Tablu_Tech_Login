import React from "react"
import {View, Text} from 'react-native'
import styles from './style'

export default function Titulo(){
    return(
        <View>
            <Text style = {styles.title}>Tablu<span style = {styles.span}>Tech</span></Text>
        </View>
    )
}