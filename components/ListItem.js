import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
} from 'react-native';

export default function ListItem({ el }) {
    return (
        <TouchableHighlight>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 30,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 10,
        width: '80%',
        marginLeft: '10%'
    }

});