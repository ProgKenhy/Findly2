import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {gStyle} from '../styles/style'


export default function Main() {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Page about us!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});