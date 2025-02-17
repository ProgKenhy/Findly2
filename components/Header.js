import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 25,
        height: 70,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    }

});