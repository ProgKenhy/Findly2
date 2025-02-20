import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar, Text, Button, Image, Modal, TouchableOpacity, FlatList} from 'react-native';
import {
    useNavigation,
} from '@react-navigation/native';
import {gStyle} from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddNewsForm from './AddNewsForm';


export default function Main() {
    const navigation = useNavigation();
    const loadScene = () => {
        navigation.navigate('FullInfo');
    }

    const [news, setNews] = useState([
        {
            name: 'Google',
            anons: 'Google!!!',
            full: 'Google is cool!',
            key: '1',
            img: 'https://media.lpgenerator.ru/uploads/2019/07/11/1_thumb600x460.jpg'
        },
        {
            name: 'Apple',
            anons: 'Apple!!!',
            full: 'Apple is cool!',
            key: '2',
            img: 'https://help.apple.com/assets/6723B83E1B0110B75B0CB543/6723B84630BCA0A66002BCFA/ru_RU/cfef5ce601689564e0a39b4773f20815.png'
        },
        {
            name: 'FaceBook',
            anons: 'FaceBook!!!',
            full: 'FaceBook is cool!',
            key: '3',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s'
        },
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }


    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View>
                    <Ionicons name="close-circle-sharp" size={30} color="black" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                    <Text style={gStyle.title}>Форма добавления статей</Text>
                    <AddNewsForm addArticle={addArticle}/>
                </View>
            </Modal>
            <Ionicons name="add-circle-sharp" size={30} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
            <FlatList
                data={news}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                        <Text style={[gStyle.title, {alignSelf: 'center'}]}>{item.name}</Text>
                        <Image style={{alignSelf: 'center'}} source={{
                            width: 150,
                            height: 150,
                            uri: item.img,
                        }}/>
                        <Text style={gStyle.aText}>{item.anons}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title='Open page' onPress={loadScene}/>
        </View>
    );
}

const styles = StyleSheet.create({
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15,
    },
    iconClose: {
        textAlign: 'right',
    },
});