import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Discount = () => {
    const [amount, setAmount] = useState('0');
    const [discount, setDiscount] = useState('0');
    const [entryIn, setEntryIn] = useState('amountEntry');
    const [effective, setEffective] = useState('0.00');
    const [saved, setSaved] = useState('0');

    const addVal = (val: string) => {
        if (entryIn === 'amountEntry') {
            const prevVal = amount;
            setAmount(prevVal + val);
        } else {
            const prevVal = discount;
            setDiscount(prevVal + val);
        }
    }
    const clearAll = () => {
        setAmount('');
        setDiscount('');
        setEffective('');
        setSaved('0');
    }
    const clear = () => {
        if (entryIn === 'amountEntry') {
            const prevVal = amount;
            const updatedStr = prevVal.slice(0, -1);
            setAmount(updatedStr);
        } else {
            const prevVal = discount;
            const updatedStr = prevVal.slice(0, -1);
            setDiscount(updatedStr);
        }
    }
    const evaluate = () => {
        const prevAmount = amount;
        const prevDiscount = discount;

        const price = (Number(prevAmount) - (Number(prevAmount) / 100 * Number(prevDiscount)));
        const save = Number(prevAmount) - price;
        setEffective(price.toFixed(2));
        setSaved(save.toFixed(2));
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.discount}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('amountEntry')} style={[styles.entries, entryIn === 'amountEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Amount:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{amount} rs.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('discountEntry')} style={[styles.entries, entryIn === 'discountEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Discount</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{discount} %</Text>
                    </TouchableOpacity>
                    <View style={[styles.entries, { borderColor: 'transparent' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Effective Price:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{effective} rs.</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'center', color: '#34495e' }}>Your Save: {saved} rs.</Text>
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

export default Discount

const styles = StyleSheet.create({
    discount: {
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