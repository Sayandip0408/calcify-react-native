import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { evaluate as mathEvaluate } from 'mathjs';

const BMI = () => {
    const [heightVal, setHeightVal] = useState('0');
    const [weightVal, setWeightVal] = useState('0');
    const [entryIn, setEntryIn] = useState('heightEntry');
    const [bmiVal, setBmiVal] = useState('');
    const [bmiStatus, setBmiStatus] = useState('');

    const addVal = (val: string) => {
        if (entryIn === 'heightEntry') {
            const prevVal = heightVal;
            setHeightVal(prevVal + val);
        } else {
            const prevVal = weightVal;
            setWeightVal(prevVal + val);
        }
    }
    const clearAll = () => {
        setHeightVal('');
        setWeightVal('');
        setBmiStatus('');
        setBmiVal('');
    }
    const clear = () => {
        if (entryIn === 'heightEntry') {
            const prevVal = heightVal;
            const updatedStr = prevVal.slice(0, -1);
            setHeightVal(updatedStr);
        } else {
            const prevVal = weightVal;
            const updatedStr = prevVal.slice(0, -1);
            setWeightVal(updatedStr);
        }
    }
    const evaluate = () => {
        const prevHeightVal = heightVal;
        const prevWeightVal = weightVal;

        const heightInMeters = (Number(prevHeightVal) / 100);

        const bmi = Number(prevWeightVal) / (heightInMeters * heightInMeters);
        setBmiVal(bmi.toFixed(2));
        if (bmi < 18.5) {
            setBmiStatus("Underweight");
        } else if (bmi > 25.0) {
            setBmiStatus("Overweight");
        } else {
            setBmiStatus("Normal");
        }
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.bmi}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('heightEntry')} style={[styles.entries, entryIn === 'heightEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Height</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{heightVal} cms.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('weightEntry')} style={[styles.entries, entryIn === 'weightEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Weight</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{weightVal} kgs.</Text>
                    </TouchableOpacity>
                    <View style={styles.result}>
                        <Text style={{ fontWeight: '600', color: '#34495e', fontSize: 16 }}>BMI</Text>
                        <Text style={{ fontWeight: '700', color: '#000000', fontSize: 32 }}>{bmiVal}</Text>
                        <Text style={{ fontWeight: '700', color: bmiStatus === 'Normal' ? 'green' : bmiStatus === 'Underweight' ? 'dodgerblue' : 'orangered', fontSize: 16 }}>{bmiStatus}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontWeight: '600', textTransform: 'uppercase', color: '#34495e' }}>~ Information ~</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                            <Text style={{ color: 'dodgerblue', fontWeight: '600' }}>Underweight</Text>
                            <Text style={{ color: 'green', fontWeight: '600' }}>Normal</Text>
                            <Text style={{ color: 'orangered', fontWeight: '600' }}>Overweight</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', height: 5, width: '100%' }}>
                            <View style={{ backgroundColor: 'dodgerblue', height: '100%', width: '33.33%' }}></View>
                            <View style={{ backgroundColor: 'green', height: '100%', width: '33.33%' }}></View>
                            <View style={{ backgroundColor: 'orangered', height: '100%', width: '33.33%' }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ fontWeight: '600', color: '#34495e' }}>16.0</Text>
                            <Text style={{ fontWeight: '600', color: '#34495e' }}>18.5</Text>
                            <Text style={{ fontWeight: '600', color: '#34495e' }}>25.0</Text>
                            <Text style={{ fontWeight: '600', color: '#34495e' }}>40.0</Text>
                        </View>
                    </View>
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
                        <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
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

export default BMI

const styles = StyleSheet.create({
    bmi: {
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
    info: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    result: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
})