import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, Button, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Homescreen from './Homescreen'


function Schedule() {
    const [loading2, setLoading2] = useState(true); // Set loading to true on component mount
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const subscriber2 = firestore()
            .collection("schedule")
            .where('prospective_student_id', '==', 1)
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
                    <Text style={{fontSize: 16}}>Activity One: {item.activity_one}</Text>
                    <Text style={{fontSize: 16}}>Location: {item.activity_one_location}</Text>
                    <Text style={{fontSize: 16}}>Time: {item.activity_one_time}</Text>
                    <View style={{
                        height: 0,
                        width: 400,
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        marginTop: 7,
                        marginBottom: 7
                    }} />
                        <Text style={{fontSize: 16}}>Activity Two: {item.activity_two}</Text>
                        <Text style={{fontSize: 16}}>Location: {item.activity_two_location}</Text>
                    <Text style={{fontSize: 16}}>Time: {item.activity_two_time}</Text>
                    <View style={{
                        height: 0,
                        width: 400,
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        marginTop: 7,
                        marginBottom: 7
                    }} />
                    <Text style={{fontSize: 16}}>Activity Three: {item.activity_three}</Text>
                    <Text style={{fontSize: 16}}>Location: {item.activity_three_location}</Text>
                    <Text style={{fontSize: 16}}>Time: {item.activity_three_time}</Text>
                    <View style={{
                        height: 0,
                        width: 400,
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        marginTop: 7,
                        marginBottom: 7
                    }} />
                    <Text style={{fontSize: 16}}>Activity Four: {item.activity_four}</Text>
                    <Text style={{fontSize: 16}}>Location: {item.activity_four_location}</Text>
                    <Text style={{fontSize: 16}}>Time: {item.activity_four_time}</Text>
                    <View style={{
                        height: 0,
                        width: 400,
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        marginTop: 7,
                        marginBottom: 7
                    }} />
                    <Text style={{fontSize: 16}}>Activity Five: {item.activity_five}</Text>
                    <Text style={{fontSize: 16}}>Location: {item.activity_five_location}</Text>
                    <Text style={{fontSize: 16}}>Time: {item.activity_five_time}</Text>
                </View>
            )}
        />
    );
}



export default class StudentSchedule extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, fontWeight: "bold", marginBottom: 15, textAlign: "center", marginTop: 10}}>Visit Day Schedule</Text>
                <Button title={'Home Page'} onPress={() => navigate('Home')} />
                <View style={styles.containerTwo}>
                    {<Schedule />}
                </View>
            </View>

        );
    }
}

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