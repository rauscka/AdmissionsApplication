import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Button, TextInput, Image, Text, ScrollView, ActivityIndicator, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";





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

    if(user_email == "justin.berger@drake.edu"){
        return ('App2');
    }


    // const [schedule, setSchedule] = useState([]);
    //
    // useEffect(() => {
    //     const subscriber2 = firestore()
    //         .collection("students")
    //         .where('email', '==', user_email)
    //         .onSnapshot(querySnapshot => {
    //             const schedule = [];
    //
    //             querySnapshot.forEach(documentSnapshot => {
    //                 //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                 schedule.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,
    //                 });
    //             });
    //
    //
    //             setSchedule(schedule);
    //         });
    //
    //     // Unsubscribe from events when no longer in use
    //     return () => subscriber2();
    // }, []);
    //
    // if (schedule.length > 0) {
    //     return ('App');
    // }







    // const [schedule, setSchedule] = useState([]);
    //
    // firestore()
    //     .collection('students')
    //     .where('email', '==', user_email)
    //     .get()
    //     .then(querySnapshot => {
    //         let student_size = querySnapshot.size;
    //     });
    //
    // if (student_size > 0) {
    //     return ('App');
    // }
    //
    // const tour_guide = firestore()
    //     .collection('tourGuides')
    //     .where('email', '==', user_email)
    //     .get();
    //
    //
    // if (tour_guide != null) {
    //     return ('App2');
    // }

}




// function authenticate(email, password){
//     let result = false;
//     auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//         result = true;
//     })
//     .catch(error => {
//             if (error.code === 'auth/email-already-in-use') {
//                 console.log('That email address is already in use!');
//             }
//
//             if (error.code === 'auth/invalid-email') {
//                 console.log('That email address is invalid!');
//             }
//
//             console.error(error);
//     })
//     return(result);
// }


// function status(email, password) {
//     // Set an initializing state whilst Firebase connects
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
//
//     auth()
//         .signInWithEmailAndPassword(email, password)
//
//     // Handle user state changes
//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }
//
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);
//
//     if (initializing) return null;
//
//     if (!user) {
//         return false;
//     }
//     return true;
// }


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
            .catch(alert('Invalid username or password.'))
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



