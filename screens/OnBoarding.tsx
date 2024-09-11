import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import OnBoardingImg from '../images/onboarding.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = () => {
    const navigation = useNavigation();

    const handleGetStarted = async () => {
        try {
            await AsyncStorage.setItem('hasViewedOnboarding', 'true');
            navigation.reset({
                index: 0,
                routes: [{name: 'Home'}]
            });
        } catch (error) {
            console.error('Failed to save onboarding status:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#CFC3A8', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.onBoarding}
        >
            <StatusBar backgroundColor='#CFC3A8' barStyle='dark-content' />
            <View style={styles.page}>
                <OnBoardingImg width={250} height={250} style={styles.img} />
                <Text style={styles.slogan}>Calcify Means : Simplify Numbers, Amplify Results.</Text>
                <Text style={styles.desc}>Calcify is a sleek and intuitive calculator app designed to simplify your calculations with elegance and efficiency.</Text>
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <LinearGradient
                        colors={['#FDD65A', '#CEE756']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonInner}
                    >
                        <Text style={styles.buttonText}>Get started</Text>
                        <View style={styles.icon}>
                            <Icon name="angle-double-right" size={25} color="#000" />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    onBoarding: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: 20,
    },
    img: {
        alignSelf: 'flex-end',
    },
    slogan: {
        fontSize: 45,
        fontWeight: '800',
        color: 'black',
    },
    desc: {
        textTransform: 'capitalize',
        fontWeight: '500',
    },
    button: {
        borderRadius: 10,
        height: 50,
        width: '100%',
    },
    buttonInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e8e05a',
        padding: 2,
        borderRadius: 10,
    },
    icon: {
        backgroundColor: '#f1c40f',
        height: 48,
        width: 48,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginLeft: 10,
    },
});
