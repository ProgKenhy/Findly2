import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/Main';
import FullInfo from './components/FullInfo';


const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
            justifyContent: 'center'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
    },
    screens: {
        Home: {
            screen: Main,
            options: {
                title: 'Новости',
            },
        },
        FullInfo: {
            screen: FullInfo,
            options: ({route}) => ({
                title: route.params?.name || 'Details',
            }),
        },
    },
});


const Navigation = createStaticNavigation(RootStack);

export default function Navigate() {
    return <Navigation/>;
}



