import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { evaluate as mathEvaluate } from 'mathjs';

const Temperature = () => {
    const [celsius, setCelsius] = useState('0');
    const [fahrenheit, setFahrenheit] = useState('32');
    const [kelvin, setKelvin] = useState('273.15');
    const [entryIn, setEntryIn] = useState('celsiusEntry');

    const addVal = (val: string) => {
        if (entryIn === 'celsiusEntry') {
            const prevVal = celsius;
            setCelsius(prevVal + val);
        } else if (entryIn === 'fahrenheitEntry') {
            const prevVal = fahrenheit;
            setFahrenheit(prevVal + val);
        } else {
            const prevVal = kelvin;
            setKelvin(prevVal + val);
        }
    }
    const clearAll = () => {
        setCelsius('');
        setFahrenheit('');
        setKelvin('');
    }
    const clear = () => {
        if (entryIn === 'celsiusEntry') {
            const prevVal = celsius;
            const updatedStr = prevVal.slice(0, -1);
            setCelsius(updatedStr);
        } else if (entryIn === 'fahrenheitEntry') {
            const prevVal = fahrenheit;
            const updatedStr = prevVal.slice(0, -1);
            setFahrenheit(updatedStr);
        } else {
            const prevVal = kelvin;
            const updatedStr = prevVal.slice(0, -1);
            setKelvin(updatedStr);
        }
    }
    const changeSign = () => {
        if (entryIn === 'celsiusEntry') {
            const prevVal = Number(celsius);
            if (prevVal < 0) {
                const val = mathEvaluate(`abs(${prevVal})`);
                setCelsius(val);
            } else {
                const val = (prevVal * -1);
                setCelsius(val.toString());
            }
        } else if (entryIn === 'fahrenheitEntry') {
            const prevVal = Number(fahrenheit);
            if (prevVal < 0) {
                const val = mathEvaluate(`abs(${prevVal})`);
                setFahrenheit(val);
            } else {
                const val = (prevVal * -1);
                setFahrenheit(val.toString());
            }
        } else {
            const prevVal = Number(kelvin);
            if (prevVal < 0) {
                const val = mathEvaluate(`abs(${prevVal})`);
                setKelvin(val);
            } else {
                const val = (prevVal * -1);
                setKelvin(val.toString());
            }
        }
    }
    const evaluate = () => {
        const prevCelsius = Number(celsius);
        const prevFahrenheit = Number(fahrenheit);
        const prevKelvin = Number(kelvin);

        if (entryIn === 'celsiusEntry') {
            const f = (9 / 5 * prevCelsius) + 32;
            const k = (prevCelsius + 273.15);
            setFahrenheit(f.toFixed(2));
            setKelvin(k.toFixed(2));
        } else if (entryIn === 'fahrenheitEntry') {
            const c = (prevFahrenheit - 32) * (5 / 9);
            const k = (prevFahrenheit - 32) * (5 / 9) + 273.15;
            setCelsius(c.toFixed(2));
            setKelvin(k.toFixed(2));
        } else {
            const c = (prevKelvin - 273.15);
            const f = (prevKelvin - 273.15) * (9 / 5) + 32;
            setCelsius(c.toFixed(2));
            setFahrenheit(f.toFixed(2));
        }
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.temp}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('celsiusEntry')} style={[styles.entries, entryIn === 'celsiusEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Celsius:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{celsius}℃</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('fahrenheitEntry')} style={[styles.entries, entryIn === 'fahrenheitEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Fahrenheit:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{fahrenheit}℉</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('kelvinEntry')} style={[styles.entries, entryIn === 'kelvinEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Kelvin:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{kelvin} K</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keys}>
                    <View style={styles.keyCol}>
                        <TouchableOpacity onPress={() => addVal('7')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('4')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('1')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeSign()} style={[styles.key, styles.digit]}>
                            <Text style={[styles.buttonText, { fontSize: 24 }]}>+/-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        <TouchableOpacity onPress={() => addVal('8')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('5')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('2')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('0')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.keyCol}>
                        <TouchableOpacity onPress={() => addVal('9')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('6')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('3')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('.')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        <TouchableOpacity onPress={() => clearAll()} style={[styles.key, styles.operator, { flex: 1 }]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clear()} style={[styles.key, styles.operator, { flex: 1 }]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => evaluate()} style={[styles.key, styles.evaluate, { flex: 2 }]}>
                            <Text style={styles.equal}>GO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Temperature

const styles = StyleSheet.create({
    temp: {
        flex: 1,
    },
    page: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    display: {
        flex: 2,
        width: '100%',
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    keys: {
        flex: 3,
        width: '100%',
        flexDirection: 'row',
    },
    keyCol: {
        flex: 1,

    },
    key: {
        borderWidth: 0.2,
        borderColor: '#34495e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    digit: {
    },
    operator: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    evaluate: {
        backgroundColor: 'black',
    },
    equal: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700'
    },
    buttonText: {
        fontSize: 40,
        fontWeight: '400',
        color: '#000'
    },
    entries: {
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})