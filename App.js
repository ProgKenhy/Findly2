import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {gStyle} from './styles/style'
import Main from './components/Main'

// Подгружаем шрифты
const loadFonts = async () => {
    await Font.loadAsync({
        'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
    });
};

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await loadFonts();
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <Main/>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});