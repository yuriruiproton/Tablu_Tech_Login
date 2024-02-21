import React, { useState } from "react";
import {View, Text, TextInput} from 'react-native'
import styles from './style'
import { TouchableOpacity } from "react-native-web";

export default function Form(){

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    function validacaoLogin(){
        if(email == null){
            setErrorMessage("Campo obrigatorio")
        }
    }



    return(
        <View styles ={styles.inputContent}>
            
            <View style ={styles.form}>
            <TextInput
            style = {styles.input}
            placeholder="Email"
            />

           
            <TextInput
            style = {styles.input}
            placeholder="Password"
            />
            <TouchableOpacity style = {styles.forgot}>Forgot Password?</TouchableOpacity>
            <TouchableOpacity style ={styles.formButton}>LOGIN</TouchableOpacity>
            <TouchableOpacity style = {styles.signup}>Signup</TouchableOpacity>
            </View>
        </View>
    )
}