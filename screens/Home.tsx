import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { evaluate as mathEvaluate } from 'mathjs';

const Home = () => {
    const [evalString, setEvalString] = useState('');
    const [resString, setResString] = useState('');


    const addVal = (val: string) => {
        const prevVal = evalString;
        setEvalString(prevVal + val);
    }
    const clearAll = () => {
        setEvalString('');
        setResString('');
    }
    const clear = () => {
        const prevVal = evalString;
        const updatedStr = prevVal.slice(0, -1);
        setEvalString(updatedStr);
    }
    const evaluate = () => {
        const prevVal = evalString;
        try {
            const res = mathEvaluate(prevVal);
            const res2 = res.toString();
            if (res2.includes('.')) {
                if (res2.split('.')[1].length > 10) {
                    setResString(res.toFixed(10));
                } else {
                    setResString(res2);
                }
            } else {
                setResString(res);
            }
        } catch (error) {
            setResString('Syntax Error');
        }
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            // start={{x:0,y:0}}
            end={{ x: 1, y: 2 }}
            style={styles.home}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <Text style={styles.evalString}>
                        {evalString}
                    </Text>
                    <Text style={styles.resultString}>
                        {resString}
                    </Text>
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
                        <TouchableOpacity onPress={() => addVal('(')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>(</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal(')')} style={[styles.key, styles.digit]}>
                            <Text style={styles.buttonText}>)</Text>
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
                        <TouchableOpacity onPress={() => clearAll()} style={[styles.key, styles.operator]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>AC</Text>
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
                        <TouchableOpacity onPress={() => clear()} style={[styles.key, styles.operator]}>
                            <Text style={[styles.buttonText, { color: '#c0392b' }]}>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyCol}>
                        <TouchableOpacity onPress={() => addVal('+')} style={[styles.key, styles.operator]}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('-')} style={[styles.key, styles.operator]}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('*')} style={[styles.key, styles.operator]}>
                            <Text style={styles.buttonText}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addVal('/')} style={[styles.key, styles.operator]}>
                            <Text style={styles.buttonText}>÷</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => evaluate()} style={[styles.key, styles.evaluate]}>
                            <Text style={styles.equal}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
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
        // borderWidth: 0.5,
        width: '100%',
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    keys: {
        flex: 3,
        // borderWidth: 0.5,
        width: '100%',
        // padding: 10,
        flexDirection: 'row',
    },
    keyCol: {
        flex: 1,
        // borderWidth: 0.5,

    },
    key: {
        borderWidth: 0.2,
        borderColor: '#34495e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    digit: {
        // backgroundColor: 'red'
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
    evalString: {
        fontSize: 25,
        fontWeight: '500',
        color: '#34495e'
    },
    resultString: {
        fontSize: 40,
        fontWeight: '900',
        color: 'black'
    }
})