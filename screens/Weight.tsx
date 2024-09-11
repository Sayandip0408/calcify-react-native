import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Weight = () => {
    const [kg, setKg] = useState('0');
    const [gram, setGram] = useState('0');
    const [tonne, setTonne] = useState('0');
    const [quintal, setQuintal] = useState('0');
    const [pound, setPound] = useState('0');
    const [entryIn, setEntryIn] = useState('kgEntry');

    const addVal = (val: string) => {
        if (entryIn === 'kgEntry') {
            const prevVal = kg;
            setKg(prevVal + val);
        } else if (entryIn === 'gramEntry') {
            const prevVal = gram;
            setGram(prevVal + val);
        } else if (entryIn === 'tnEntry') {
            const prevVal = tonne;
            setTonne(prevVal + val);
        } else if (entryIn === 'qEntry') {
            const prevVal = quintal;
            setQuintal(prevVal + val);
        } else {
            const prevVal = pound;
            setPound(prevVal + val);
        }
    }
    const clearAll = () => {
        setKg('');
        setGram('');
        setTonne('');
        setQuintal('');
        setPound('');
    }
    const clear = () => {
        if (entryIn === 'kgEntry') {
            const prevVal = kg;
            const updatedStr = prevVal.slice(0, -1);
            setKg(updatedStr);
        } else if (entryIn === 'gramEntry') {
            const prevVal = gram;
            const updatedStr = prevVal.slice(0, -1);
            setGram(updatedStr);
        } else if (entryIn === 'tnEntry') {
            const prevVal = tonne;
            const updatedStr = prevVal.slice(0, -1);
            setTonne(updatedStr);
        } else if (entryIn === 'qEntry') {
            const prevVal = quintal;
            const updatedStr = prevVal.slice(0, -1);
            setQuintal(updatedStr);
        } else {
            const prevVal = pound;
            const updatedStr = prevVal.slice(0, -1);
            setPound(updatedStr);
        }
    }
    const evaluate = () => {
        const prevKg = Number(kg);
        const prevGram = Number(gram);
        const prevTn = Number(tonne);
        const prevQ = Number(quintal);
        const prevPound = Number(pound);

        if (entryIn === 'kgEntry') {
            const grm = (prevKg * 1000);
            const tn = (prevKg / 1000);
            const q = (prevKg / 100);
            const p = (prevKg * 2.20462);
            setGram(grm.toFixed(3));
            setTonne(tn.toFixed(3));
            setQuintal(q.toFixed(3));
            setPound(p.toFixed(3));
        } else if (entryIn === 'gramEntry') {
            const kilo = (prevGram / 1000);
            const tn = (prevGram / 1000000);
            const q = (prevGram / 100000);
            const p = (prevGram / 453.59237);
            setKg(kilo.toFixed(3));
            setTonne(tn.toFixed(3));
            setQuintal(q.toFixed(3));
            setPound(p.toFixed(3));
        } else if (entryIn === 'tnEntry') {
            const kilo = (prevTn * 1000);
            const grm = (prevTn * 1000000);
            const q = (prevTn * 10);
            const p = (prevTn * 2204.62262);
            setKg(kilo.toFixed(3));
            setGram(grm.toFixed(3));
            setQuintal(q.toFixed(3));
            setPound(p.toFixed(3));
        } else if (entryIn === 'qEntry') {
            const kilo = (prevQ * 100);
            const grm = (prevQ * 100000);
            const tn = (prevQ / 10);
            const p = (prevQ * 220.462262);
            setKg(kilo.toFixed(3));
            setGram(grm.toFixed(3));
            setTonne(tn.toFixed(3));
            setPound(p.toFixed(3));
        } else {
            const kilo = (prevPound / 2.2046);
            const grm = (prevPound / 0.0022046);
            const tn = (prevPound /2204.62262);
            const q = (prevPound /220.462262);
            setKg(kilo.toFixed(3));
            setGram(grm.toFixed(3));
            setTonne(tn.toFixed(3));
            setQuintal(q.toFixed(3));
        }
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.weight}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('kgEntry')} style={[styles.entries, entryIn === 'kgEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Kilogram:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{kg}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('gramEntry')} style={[styles.entries, entryIn === 'gramEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Gram:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{gram}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('tnEntry')} style={[styles.entries, entryIn === 'tnEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Tonne:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{tonne}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('qEntry')} style={[styles.entries, entryIn === 'qEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Quintal:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{quintal}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('poundEntry')} style={[styles.entries, entryIn === 'poundEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Pound:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{pound}</Text>
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

export default Weight

const styles = StyleSheet.create({
    weight: {
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