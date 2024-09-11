import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Data = () => {
    const [bit, setBit] = useState('0');
    const [byte, setByte] = useState('0');
    const [kb, setKb] = useState('0');
    const [mb, setMb] = useState('0');
    const [gb, setGb] = useState('0');
    const [tb, setTb] = useState('0');
    const [entryIn, setEntryIn] = useState('bitEntry');

    const addVal = (val: string) => {
        if (entryIn === 'kbEntry') {
            const prevVal = kb;
            setKb(prevVal + val);
        } else if (entryIn === 'mbEntry') {
            const prevVal = mb;
            setMb(prevVal + val);
        } else if (entryIn === 'gbEntry') {
            const prevVal = gb;
            setGb(prevVal + val);
        } else if (entryIn === 'tbEntry') {
            const prevVal = tb;
            setTb(prevVal + val);
        } else if (entryIn === 'bitEntry') {
            const prevVal = bit;
            setBit(prevVal + val);
        } else {
            const prevVal = byte;
            setByte(prevVal + val);
        }
    }
    const clearAll = () => {
        setKb('');
        setMb('');
        setGb('');
        setTb('');
        setByte('');
        setBit('');
    }
    const clear = () => {
        if (entryIn === 'kbEntry') {
            const prevVal = kb;
            const updatedStr = prevVal.slice(0, -1);
            setKb(updatedStr);
        } else if (entryIn === 'mbEntry') {
            const prevVal = mb;
            const updatedStr = prevVal.slice(0, -1);
            setMb(updatedStr);
        } else if (entryIn === 'gbEntry') {
            const prevVal = gb;
            const updatedStr = prevVal.slice(0, -1);
            setGb(updatedStr);
        } else if (entryIn === 'tbEntry') {
            const prevVal = tb;
            const updatedStr = prevVal.slice(0, -1);
            setTb(updatedStr);
        } else if (entryIn === 'bitEntry') {
            const prevVal = bit;
            const updatedStr = prevVal.slice(0, -1);
            setBit(updatedStr);
        } else {
            const prevVal = byte;
            const updatedStr = prevVal.slice(0, -1);
            setByte(updatedStr);
        }
    }
    const evaluate = () => {
        const prevKb = Number(kb);
        const prevMb = Number(mb);
        const prevGb = Number(gb);
        const prevTb = Number(tb);
        const prevByte = Number(byte);
        const prevBit = Number(bit);

        if (entryIn === 'kbEntry') {
            const bt = (prevKb * 8 * 1024);
            const byt = (prevKb * 1024);
            const m = (prevKb / 1024);
            const g = (prevKb / 1024 / 1024);
            const t = (prevKb / 1024 / 1024 / 1024);
            setBit(bt.toFixed(2));
            setByte(byt.toFixed(2));
            setMb(m.toFixed(3));
            setGb(g.toFixed(6));
            setTb(t.toFixed(9));
        } else if (entryIn === 'mbEntry') {
            const bt = (prevMb * 8 * 1024 * 1024);
            const byt = (prevMb * 1024 * 1024);
            const k = (prevMb * 1024);
            const g = (prevMb / 1024);
            const t = (prevMb / 1024 / 1024);
            setBit(bt.toFixed(3));
            setByte(byt.toFixed(3));
            setKb(k.toFixed(3));
            setGb(g.toFixed(3));
            setTb(t.toFixed(7));
        } else if (entryIn === 'gbEntry') {
            const bt = (prevGb * 8 * 1024 * 1024 * 1024);
            const byt = (prevGb * 1024 * 1024 * 1024);
            const k = (prevGb * 1024 * 1024);
            const m = (prevGb * 1024);
            const t = (prevGb / 1024);
            setBit(bt.toFixed(3));
            setByte(byt.toFixed(3));
            setKb(k.toFixed(3));
            setMb(m.toFixed(3));
            setTb(t.toFixed(3));
        } else if (entryIn === 'tbEntry') {
            const bt = (prevTb * 8 * 1024 * 1024 * 1024 * 1024);
            const byt = (prevTb * 1024 * 1024 * 1024 * 1024);
            const k = (prevTb * 1024 * 1024 * 1024);
            const m = (prevTb * 1024 * 1024);
            const g = (prevTb * 1024);
            setBit(bt.toFixed(3));
            setByte(byt.toFixed(3));
            setKb(k.toFixed(3));
            setMb(m.toFixed(3));
            setGb(g.toFixed(3));
        } else if (entryIn === 'bitEntry') {
            const byt = (prevBit / 8);
            const k = (prevBit / 8 / 1024);
            const m = (prevBit / 8 / 1024 / 1024);
            const g = (prevBit / 8 / 1024 / 1024 / 1024);
            const t = (prevBit / 8 / 1024 / 1024 / 1024 / 1024);
            setByte(byt.toFixed(3));
            setKb(k.toFixed(3));
            setMb(m.toFixed(6));
            setGb(g.toFixed(9));
            setTb(t.toFixed(12));
        } else {
            const bt = (prevByte * 8);
            const k = (prevByte / 1024);
            const m = (prevByte / 1024 / 1024);
            const g = (prevByte / 1024 / 1024 / 1024);
            const t = (prevByte / 1024 / 1024 / 1024 / 1024);
            setBit(bt.toFixed(3));
            setKb(k.toFixed(3));
            setMb(m.toFixed(6));
            setGb(g.toFixed(9));
            setTb(t.toFixed(12));
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
                    <TouchableOpacity onPress={() => setEntryIn('bitEntry')} style={[styles.entries, entryIn === 'bitEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Bit:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{bit}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('byteEntry')} style={[styles.entries, entryIn === 'byteEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Byte:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{byte}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('kbEntry')} style={[styles.entries, entryIn === 'kbEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Kilobyte:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{kb}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('mbEntry')} style={[styles.entries, entryIn === 'mbEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Megabyte:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{mb}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('gbEntry')} style={[styles.entries, entryIn === 'gbEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Gigabyte:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{gb}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('tbEntry')} style={[styles.entries, entryIn === 'tbEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Terabyte:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{tb}</Text>
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

export default Data

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