import React from 'react'
import {StyleSheet, View, Button, TextInput, Image} from 'react-native'
import auth from '@react-native-firebase/auth'

function authenticate(email, password){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account created & signed in!');
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error(error);
    });
    return(true);
}


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

    onLogin = async () => {
        const { email, password } = this.state
        try {
            if (authenticate(email, password)) {
                this.props.navigation.navigate('App')
            }

        } catch (error) {
            alert(error)
        }
    }

    render() {
        const { email, password } = this.state

        return (
            <View style={styles.container}>
                <View style={{ margin: 10 }}>
                    <TextInput
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        autoCapitalize='none'
                        onChangeText={this.handleEmailChange}
                    />
                </View>
                <View style={{ margin: 10 }}>
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#befaf4',
        alignItems: 'center',
        justifyContent: 'center'
    }
})



