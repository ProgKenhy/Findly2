import React, {useState, useRef} from 'react';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import {
    StyleSheet,
    View, FlatList, StatusBar
} from 'react-native';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'Купить молоко', key: '1'},
        {text: 'Купить картошку', key: '2'},
        {text: 'Купить яйца', key: '3'},
        {text: 'Купить творог', key: '4'},
    ])

    const currentId = useRef(5);

    const addHandler = (text) => {
        setListOfItems((list) => {
            return [
                {text: text, key: String(currentId.current)},
                ...list
            ];
        });
        currentId.current += 1;
    };

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }

    return (
        <View>
            <StatusBar style="auto"/>
            <Header/>
            <Form addHandler={addHandler} />
            <View>
                <FlatList data={listOfItems} renderItem={({item}) => (
                    <ListItem el={item} deleteHandler={ deleteHandler}/>
                )}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});