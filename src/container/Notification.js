import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const Notification = ({ navigation }) => {
    console.log(navigation.getState())
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Cabin-Bold', fontSize: 18 }}>{'Notification Screen'}</Text>
            <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => {
                navigation.navigate('Home')
            }}>
                <Text>{'home: 1'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => {
                navigation.navigate('Detail')
            }}>
                <Text>{'detail: 2'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => {
                navigation.navigate('Chat')
            }}>
                <Text>{'chat: 3'}</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default Notification;