import React, {useState} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    Button,
    Alert,
    Modal,
    TextInput,
    View,
    Image,
    TouchableWithoutFeedback, Platform
} from 'react-native';

export default function App() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleTextPress = () => console.log('Text pressed!!');
    const handleButtonPress = () => Alert.alert("Findly", "My app is good", [
        {text: "Да", onPress: () => console.log("Yes button")},
        {text: "Отмена", onPress: () => console.log("No button")},
    ]);

    const handleButtonPress2 = () => {
        setModalVisible(true); // Показываем модальное окно
    };

    const handleSubmit = () => {
        console.log('Введенный текст:', inputText);
        setModalVisible(false); // Скрываем модальное окно
    };

    return (
        <SafeAreaView style={[{backgroundColor: 'red'}, styles.container]}>
            <StatusBar style="auto"/>
            <Text style={styles.text}>Do u s dick?</Text>
            <View style={styles.button}>
                <Button title={'xui'} color='blue' onPress={handleButtonPress}/>
            </View>
            <Button title={'Кнопка 222'} color='green' onPress={handleButtonPress2}/>
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Findly</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Введите текст"
                            value={inputText}
                            onChangeText={setInputText}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Отмена" onPress={() => setModalVisible(false)}/>
                            <Button title="OK" onPress={handleSubmit}/>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableWithoutFeedback onPress={handleButtonPress}>
                <Image source={{
                    width: 200,
                    height: 150,
                    uri: "https://www.meme-arsenal.com/memes/e2f11930c6b044e313a1e7a1013fd3a1.jpg"
                }}/>
            </TouchableWithoutFeedback>
            <View style={styles.box}></View>

            <View style={styles.mainBlock}>
                <View style={[styles.boxik, {backgroundColor: 'yellow'}]}></View>
                <View style={[styles.boxik, {backgroundColor: 'black', height: 200}]}></View>
                <View style={[styles.boxik, {backgroundColor: 'blue', alignSelf: 'flex-start'}]}></View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'yellow',
    },
    button: {
        position: "absolute",
        top: 150,
        left: 270,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        backgroundColor: 'orange',
        width: '50%',
        height: 150,
        opacity: 0.7,
        borderWidth: 2,
        borderColor: 'gold',
        borderStyle: 'dotted',
        top: Platform.OS === "ios" ? 50 : 30,
        left: 15,
    },
    mainBlock: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
    boxik: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    }
});