import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Slider from '@react-native-community/slider';
import { evaluate as mathEvaluate } from 'mathjs';

const Loan = () => {
    const [amount, setAmount] = useState('1000');
    const [rate, setRate] = useState(9.7);
    const [tenure, setTenure] = useState(6.5);
    const [emi, setEmi] = useState('0');
    const [interest, setInterest] = useState('0');
    const [total, setTotal] = useState('0');
    const [entryIn, setEntryIn] = useState('amountEntry');

    const handleRateValueChange = (value: number) => {
        setRate(value);
    };
    const handleTenureValueChange = (value: number) => {
        setTenure(value);
    };

    const addVal = (val: string) => {
        const prevVal = amount;
        setAmount(prevVal + val);
    }
    const clearAll = () => {
        setAmount('');
        setRate(9.7);
        setTenure(6.5);
        setEmi('0');
        setTotal('0');
        setInterest('0');
    }
    const clear = () => {
        const prevVal = amount;
        const updatedStr = prevVal.slice(0, -1);
        setAmount(updatedStr);
    }
    const evaluate = () => {
        const prevAmount = Number(amount);
        const months = tenure * 12;
        const roi = rate / 12 / 100;
        const power = mathEvaluate(`${(1 + roi)}^${months}`);
        const answer = (prevAmount * roi * power) / (power - 1);
        const totalPay = (answer * months);
        const totalInterest = (totalPay - prevAmount);

        setEmi(answer.toFixed(2));
        setTotal(totalPay.toFixed(2));
        setInterest(totalInterest.toFixed(2));
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.loan}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('amountEntry')} style={[styles.entries, entryIn === 'amountEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Amount:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{amount} rs.</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Interest Rate:</Text>
                        <Slider
                            style={{ height: 40, width: '65%' }}
                            minimumValue={5}
                            maximumValue={20}
                            step={0.1}
                            value={rate}
                            onValueChange={handleRateValueChange}
                            thumbTintColor="#34495e"
                            minimumTrackTintColor="#34495e"
                            maximumTrackTintColor="#7f8c8d"
                        />
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{rate.toFixed(1)} %</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Tenure:</Text>
                        <Slider
                            style={{ height: 40, width: '75%' }}
                            minimumValue={1}
                            maximumValue={20}
                            step={0.5}
                            value={tenure}
                            onValueChange={handleTenureValueChange}
                            thumbTintColor="#34495e"
                            minimumTrackTintColor="#34495e"
                            maximumTrackTintColor="#7f8c8d"
                        />
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{tenure.toFixed(1)} yrs.</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'center', fontWeight: '500', color: '#34495e' }}>EMI: {emi} rs.</Text>
                    <View style={{ width: '100%' }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>Loan Amount:</Text>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>{Number(amount).toFixed(2)} rs.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>Total Interest:</Text>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>{interest} rs.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>Total Payable:</Text>
                            <Text style={{ fontWeight: '500', color: '#34495e' }}>{total} rs.</Text>
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

export default Loan

const styles = StyleSheet.create({
    loan: {
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