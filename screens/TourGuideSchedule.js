//This file creates the schedule screen that is on the tour guide view of the app.

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, Button, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Homescreen from './Homescreen'


//This function pulls the tour guide's upcoming tours from the database in Firestore and returns it as a FlatList
//component that is later integrated into the page.
function Scheduled_Tours() {
    const [loading2, setLoading2] = useState(true); // Set loading to true on component mount
    const [schedule, setSchedule] = useState([]);

    const user = auth().currentUser.email;

    useEffect(() => {
        const subscriber2 = firestore()
            .collection("students")
            .where('tour_guide_email', '==', user)
            .onSnapshot(querySnapshot => {
                const schedule = [];

                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    schedule.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });


                setSchedule(schedule);
                setLoading2(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber2();
    }, []);
    if (loading2) {
        return <ActivityIndicator />;
    }

    return (
        <FlatList
            data={schedule}
            renderItem={({ item }) => (
                <View style={{ marginTop: 30, flex: 1}}>
                    <Text style={{fontSize: 16}}>First Name: {item.first_name}</Text>
                    <Text style={{fontSize: 16}}>Last Name: {item.last_name}</Text>
                    <Text style={{fontSize: 16}}>Email: {item.email}</Text>
                    <Text style={{fontSize: 16}}>Tour Date: {item.tour_date}</Text>
                    <Text style={{fontSize: 16}}>Tour Time: {item.tour_time}</Text>
                </View>
            )}
        />
    );
}


//This class is where the schedule page is actually created.  It includes text, a button to navigate to the
//home screen, and the list of upcoming tours for the tour guide.
export default class TourGuideSchedule extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, fontWeight: "bold", marginBottom: 15, textAlign: "center", marginTop: 10}}>Upcoming Tours</Text>
                <Button title={'Home Page'} onPress={() => navigate('Home')} />
                <View style={styles.containerTwo}>
                    {<Scheduled_Tours />}
                </View>
            </View>

        );
    }
}

//This creates the page design.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfe9f3',
        alignContent: "center",
        justifyContent: "center"
    },
    containerTwo: {
        flex: 1,
        backgroundColor: '#cfe9f3',
    },
});