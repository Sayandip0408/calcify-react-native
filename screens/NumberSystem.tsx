import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const NumberSystem = () => {
    const [bin, setBin] = useState('0');
    const [oct, setOct] = useState('0');
    const [dec, setDec] = useState('0');
    const [hex, setHex] = useState('0');
    const [entryIn, setEntryIn] = useState('binEntry');

    const addVal = (val: string) => {
        if (entryIn === 'binEntry') {
            const prevVal = bin;
            setBin(prevVal + val);
        } else if (entryIn === 'octEntry') {
            const prevVal = oct;
            setOct(prevVal + val);
        } else if (entryIn === 'decEntry') {
            const prevVal = dec;
            setDec(prevVal + val);
        } else {
            const prevVal = hex;
            setHex(prevVal + val);
        }
    }
    const clearAll = () => {
        setBin('');
        setOct('');
        setDec('');
        setHex('');
    }
    const clear = () => {
        if (entryIn === 'binEntry') {
            const prevVal = bin;
            const updatedStr = prevVal.slice(0, -1);
            setBin(updatedStr);
        } else if (entryIn === 'octEntry') {
            const prevVal = oct;
            const updatedStr = prevVal.slice(0, -1);
            setOct(updatedStr);
        } else if (entryIn === 'decEntry') {
            const prevVal = dec;
            const updatedStr = prevVal.slice(0, -1);
            setDec(updatedStr);
        } else {
            const prevVal = hex;
            const updatedStr = prevVal.slice(0, -1);
            setHex(updatedStr);
        }
    }
    const evaluate = () => {
        if (entryIn === 'binEntry') {
            const [integerPart, fractionalPart] = bin.split('.');

            const intToOctal = parseInt(integerPart, 2).toString(8);
            let fracToOctal = '';
            if (fractionalPart) {
                let frac = parseFloat(`0.${fractionalPart}`);
                while (frac !== 0) {
                    frac *= 8;
                    fracToOctal += Math.floor(frac).toString();
                    frac -= Math.floor(frac);
                }
            }
            setOct(fractionalPart ? `${intToOctal}.${fracToOctal}` : intToOctal);

            const intToDecimal = parseInt(integerPart, 2);
            let fracToDecimal = 0;
            if (fractionalPart) {
                for (let i = 0; i < fractionalPart.length; i++) {
                    fracToDecimal += parseInt(fractionalPart[i], 2) / Math.pow(2, i + 1);
                }
            }
            setDec((intToDecimal + fracToDecimal).toString());

            const intToHex = parseInt(integerPart, 2).toString(16).toUpperCase();
            let fracToHex = '';
            if (fractionalPart) {
                let frac = parseFloat(`0.${fractionalPart}`);
                while (frac !== 0) {
                    frac *= 16;
                    fracToHex += Math.floor(frac).toString(16).toUpperCase();
                    frac -= Math.floor(frac);
                }
            }
            setHex(fractionalPart ? `${intToHex}.${fracToHex}` : intToHex);
        } else if (entryIn === 'octEntry') {
            const [integerPart, fractionalPart] = oct.split('.');

            const intToBinary = parseInt(integerPart, 8).toString(2);
            let fracToBinary = '';
            if (fractionalPart) {
                let frac = parseFloat(`0.${fractionalPart}`);
                while (frac !== 0) {
                    frac *= 2;
                    fracToBinary += Math.floor(frac).toString();
                    frac -= Math.floor(frac);
                }
            }
            setBin(fractionalPart ? `${intToBinary}.${fracToBinary}` : intToBinary);

            const intToDecimal = parseInt(integerPart, 8);
            let fracToDecimal = 0;

            if (fractionalPart) {
                for (let i = 0; i < fractionalPart.length; i++) {
                    fracToDecimal += parseInt(fractionalPart[i], 8) / Math.pow(8, i + 1);
                }
            }
            setDec((intToDecimal + fracToDecimal).toString());

            const intToHex = parseInt(integerPart, 8).toString(16).toUpperCase();
            let fracToHex = '';

            if (fractionalPart) {
                let frac = parseFloat(`0.${fractionalPart}`);
                while (frac !== 0) {
                    frac *= 16;
                    fracToHex += Math.floor(frac).toString(16).toUpperCase();
                    frac -= Math.floor(frac);
                }
            }
            setHex(fractionalPart ? `${intToHex}.${fracToHex}` : intToHex);
        } else if (entryIn === 'decEntry') {
            const integerPart = Math.floor(Number(dec));
            let fractionalPart = Number(dec) - integerPart;

            const intToBinary = integerPart.toString(2);
            let fracToBinary = '';
            while (fractionalPart !== 0 && fracToBinary.length < 10) {
                fractionalPart *= 2;
                fracToBinary += Math.floor(fractionalPart).toString();
                fractionalPart -= Math.floor(fractionalPart);
            }
            setBin(fracToBinary ? `${intToBinary}.${fracToBinary}` : intToBinary);

            const intToOctal = integerPart.toString(8);
            let fracToOctal = '';
            while (fractionalPart !== 0 && fracToOctal.length < 10) {
                fractionalPart *= 8;
                fracToOctal += Math.floor(fractionalPart).toString();
                fractionalPart -= Math.floor(fractionalPart);
            }
            setOct(fracToOctal ? `${intToOctal}.${fracToOctal}` : intToOctal);

            const intToHex = integerPart.toString(16).toUpperCase();
            let fracToHex = '';
            while (fractionalPart !== 0 && fracToHex.length < 10) {
                fractionalPart *= 16;
                fracToHex += Math.floor(fractionalPart).toString(16).toUpperCase();
                fractionalPart -= Math.floor(fractionalPart);
            }
            setHex(fracToHex ? `${intToHex}.${fracToHex}` : intToHex);
        } else {
            const [intPart, fracPart] = hex.split('.');

            const intToBinary = parseInt(intPart, 16).toString(2);
            let fracToBinary = '';
            if (fracPart) {
                let fractionalDecimal = 0;
                for (let i = 0; i < fracPart.length; i++) {
                    fractionalDecimal += parseInt(fracPart[i], 16) / Math.pow(16, i + 1);
                }
                while (fractionalDecimal !== 0 && fracToBinary.length < 10) {
                    fractionalDecimal *= 2;
                    fracToBinary += Math.floor(fractionalDecimal);
                    fractionalDecimal -= Math.floor(fractionalDecimal);
                }
            }
            setBin(fracToBinary ? `${intToBinary}.${fracToBinary}` : intToBinary);

            const intToDecimal = parseInt(intPart, 16);
            let fracToDecimal = 0;
            if (fracPart) {
                for (let i = 0; i < fracPart.length; i++) {
                    fracToDecimal += parseInt(fracPart[i], 16) / Math.pow(16, i + 1);
                }
            }
            setOct((intToDecimal + fracToDecimal).toString());

            const intToOctal = parseInt(intPart, 16).toString(8);
            let fracToOctal = '';
            if (fracPart) {
                let fractionalDecimal = 0;
                for (let i = 0; i < fracPart.length; i++) {
                    fractionalDecimal += parseInt(fracPart[i], 16) / Math.pow(16, i + 1);
                }
                while (fractionalDecimal !== 0 && fracToOctal.length < 10) {
                    fractionalDecimal *= 8;
                    fracToOctal += Math.floor(fractionalDecimal).toString();
                    fractionalDecimal -= Math.floor(fractionalDecimal);
                }
            }
            setDec(fracToOctal ? `${intToOctal}.${fracToOctal}` : intToOctal);
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
                    <TouchableOpacity onPress={() => setEntryIn('binEntry')} style={[styles.entries, entryIn === 'binEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Binary:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{bin}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('octEntry')} style={[styles.entries, entryIn === 'octEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Octal:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{oct}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('decEntry')} style={[styles.entries, entryIn === 'decEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Decimal:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{dec}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('hexEntry')} style={[styles.entries, entryIn === 'hexEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>HexaDec:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{hex}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keys}>
                    <View style={styles.keyCol}>
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('A')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>A</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('7')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>7</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('4')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>4</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={() => addVal('1')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('.')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('B')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>B</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' || entryIn === 'octEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('8')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>8</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('5')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>5</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('2')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>2</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={() => addVal('0')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('C')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>C</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' || entryIn === 'octEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('9')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>9</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('6')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>6</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('3')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>3</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={() => clear()} style={[styles.key, styles.operator, { flex: 1 }]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('D')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>D</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('E')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>E</Text>
                        </TouchableOpacity>}
                        {entryIn === 'binEntry' || entryIn === 'octEntry' || entryIn === 'decEntry' ? <TouchableOpacity onPress={() => addVal('')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => addVal('F')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>F</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={() => clearAll()} style={[styles.key, styles.operator, { flex: 1 }]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => evaluate()} style={[styles.key, styles.evaluate, { flex: 1 }]}>
                            <Text style={styles.equal}>GO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default NumberSystem

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