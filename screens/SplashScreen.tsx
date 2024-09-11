import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashImg from '../images/splash.svg';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkOnboardingStatus = async () => {
            try {
                const value = await AsyncStorage.getItem('hasViewedOnboarding');
                const hasViewedOnboarding = value === 'true';
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: hasViewedOnboarding ? 'Home' : 'OnBoarding' }],
                    });
                }, 500);
            } catch (error) {
                console.error('Failed to fetch the onboarding view status.', error);
            }
        };
        checkOnboardingStatus();
    }, [navigation]);


    return (
        <LinearGradient
            colors={['#CFC3A8', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.splash}
        >
            <StatusBar backgroundColor='#CFC3A8' barStyle='dark-content' />
            <View style={styles.page}>
                <SplashImg height={50} width={50} style={styles.img} />
                <Text style={styles.title}>Calcify</Text>
                <Text style={styles.tag}>Made by SayanDip</Text>
            </View>
        </LinearGradient>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splash: {
        flex: 1,
    },
    page: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    img: {},
    title: {
        fontSize: 50,
        fontWeight: '700',
        color: '#34495e',
    },
    tag: {
        fontWeight: '500'
    }
})