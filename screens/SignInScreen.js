//This file is where the sign in screen is built.  It includes the functionality for Firebase
//to authenticate the user and navigate to the student or tour guide view of the app depending on the user type.

import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Button, TextInput, Image, Text, ScrollView, ActivityIndicator, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";




//This function determines whether to navigate to the student ('App') or tour guide ('App2') view of the app.
//We were having some issues with the Firestore query not working correctly here, so unfortunately,
//the user types are hardcoded in for now; however, the code below is extremely close to working, so they do
//not need to be hardcoded.
function user_type(user_email) {

    if (user_email == "rebecca.dura@drake.edu"){
        return ('App');
    }

    if (user_email == "marty.martin@drake.edu"){
        return ('App');
    }

    if(user_email == "karl.rauschenberger@drake.edu"){
        return ('App2');
    }

    if(user_email == "justin.burger@drake.edu"){
        return ('App2');
    }

    //
    // let num_documents = 0;
    //
    // let query = async () => {await firestore().collection('tourGuides').where('email', '==', user_email)
    //     .get().then(querySnapshot => {
    //     querySnapshot.forEach(documentSnapshot => {
    //         num_documents = querySnapshot.size;
    //     });
    //     console.log(num_documents);
    //     num_documents = querySnapshot.size;
    //     return (num_documents);
    //     })
    // ;}
    // //console.log(num_documents);
    // //console.log(num_documents);
    // if(query() == 0){
    //     return('App2');
    // }
    // //console.log(num_documents);
    // // if(num_documents1){
    // //     return('App2');
    // // }
    // //return('App2');



}



//This class builds the actual sign in screen and navigates properly when the log in button is clicked.
export default class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleEmailChange = email => {
        this.setState({ email })
    }

    handlePasswordChange = password => {
        this.setState({ password })
    }

    onLogin = async() => {
        const { email, password } = this.state

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate(user_type(email)))
            .catch()
    }

    render() {
        const { email, password } = this.state

        return (
            <View style={styles.containerTwo}>
                <Text style={{fontSize: 40, fontWeight: "bold", marginTop: 30, marginBottom: 30}}>Sign In Below:</Text>
                <Image
                    style={styles.Pic}
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Drake_Bulldogs_logo.svg/1200px-Drake_Bulldogs_logo.svg.png',
                    }}
                />
            <View style={styles.container}>
                <View >
                    <TextInput
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        autoCapitalize='none'
                        onChangeText={this.handleEmailChange}
                    />
                </View>
                <View style={{marginBottom: 30}}>
                    <TextInput
                        name='password'
                        value={password}
                        placeholder='Enter password'
                        secureTextEntry
                        onChangeText={this.handlePasswordChange}
                    />
                </View>
                <Button title='Login' onPress={this.onLogin} />
            </View>
            </View>
        )
    }
}


//This sets up the page design.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#dbf5f2',
        backgroundColor: '#cfe9f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTwo: {
        flex: 1,
        //backgroundColor: '#dbf5f2',
        backgroundColor: '#cfe9f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Pic: {
        width: 200,
        height: 220,
    },
})



