import React, {useState} from 'react';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import {
    StyleSheet,
    View, FlatList, Text,
} from 'react-native';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'Купить молоко', index: 1 },
        {text: 'Купить картошку', index: 2 },
        {text: 'Купить яйца', index: 3 },
        {text: 'Купить творог', index: 4 },
    ])

    return (
        <View>
            <Header/>
            <View>
                <FlatList data={listOfItems} renderItem={({ item }) => (
                    <ListItem el={item} />
                    )}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


});