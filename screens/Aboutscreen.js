import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, FlatList, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';


function Users() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection("tourGuides")
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });


                setUsers(users);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => (
                <View style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>User ID: {item.student_id}</Text>
                    <Text>First Name: {item.first_name}</Text>
                    <Text>Last Name: {item.last_name}</Text>
                </View>
            )}
        />
    );
}



export default class Aboutscreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>About Drake</Text>
          <Button title={'Home Page'} onPress={() => navigate('Home')} />
      <View style={styles.containerTwo}>
          {<Users />}
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25ffe2',
    },
    containerTwo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25ffe2',
    },
});
