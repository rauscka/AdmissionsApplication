import React from 'react'
import {StyleSheet, View, Button, TextInput, Image, Text, ScrollView} from 'react-native'
import auth from '@react-native-firebase/auth'

function authenticate(email, password){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account created & signed in!');
    })
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



