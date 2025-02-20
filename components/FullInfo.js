import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar, Button, Text} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {gStyle} from '../styles/style'
import {useNavigation} from "@react-navigation/native";


export default function Main({route}) {
    const {name = 'Not chose', full = 'No Description'} = route.params || {};
    const navigation = useNavigation();

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{JSON.stringify(name)}</Text>
            <Text style={gStyle.aText}>{JSON.stringify(full)}</Text>
            <Button
                onPress={() =>
                    navigation.setOptions({title: 'Updated!'})
                }
                title={'Update the title'}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({});