import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Length = () => {
    const [km, setKm] = useState('0');
    const [meter, setMeter] = useState('0');
    const [cm, setCm] = useState('0');
    const [mm, setMm] = useState('0');
    const [mile, setMile] = useState('0');
    const [ft, setFt] = useState('0');
    const [inch, setInch] = useState('0');
    const [yard, setYard] = useState('0');
    const [entryIn, setEntryIn] = useState('kmEntry');

    const addVal = (val: string) => {
        if (entryIn === 'kmEntry') {
            const prevVal = km;
            setKm(prevVal + val);
        } else if (entryIn === 'meterEntry') {
            const prevVal = meter;
            setMeter(prevVal + val);
        } else if (entryIn === 'cmEntry') {
            const prevVal = cm;
            setCm(prevVal + val);
        } else if (entryIn === 'mmEntry') {
            const prevVal = mm;
            setMm(prevVal + val);
        } else if (entryIn === 'mileEntry') {
            const prevVal = mile;
            setMile(prevVal + val);
        } else if (entryIn === 'ftEntry') {
            const prevVal = ft;
            setFt(prevVal + val);
        } else if (entryIn === 'inchEntry') {
            const prevVal = inch;
            setInch(prevVal + val);
        } else {
            const prevVal = yard;
            setYard(prevVal + val);
        }
    }
    const clearAll = () => {
        setKm('');
        setMeter('');
        setCm('');
        setMm('');
        setMile('');
        setFt('');
        setInch('');
        setYard('');
    }
    const clear = () => {
        if (entryIn === 'kmEntry') {
            const prevVal = km;
            const updatedStr = prevVal.slice(0, -1);
            setKm(updatedStr);
        } else if (entryIn === 'meterEntry') {
            const prevVal = meter;
            const updatedStr = prevVal.slice(0, -1);
            setMeter(updatedStr);
        } else if (entryIn === 'cmEntry') {
            const prevVal = cm;
            const updatedStr = prevVal.slice(0, -1);
            setCm(updatedStr);
        } else if (entryIn === 'mmEntry') {
            const prevVal = mm;
            const updatedStr = prevVal.slice(0, -1);
            setMm(updatedStr);
        } else if (entryIn === 'mileEntry') {
            const prevVal = mile;
            const updatedStr = prevVal.slice(0, -1);
            setMile(updatedStr);
        } else if (entryIn === 'ftEntry') {
            const prevVal = ft;
            const updatedStr = prevVal.slice(0, -1);
            setFt(updatedStr);
        } else if (entryIn === 'inchEntry') {
            const prevVal = inch;
            const updatedStr = prevVal.slice(0, -1);
            setInch(updatedStr);
        } else {
            const prevVal = yard;
            const updatedStr = prevVal.slice(0, -1);
            setYard(updatedStr);
        }
    }
    const evaluate = () => {
        const prevKm = Number(km);
        const prevMeter = Number(meter);
        const prevCm = Number(cm);
        const prevMm = Number(mm);
        const prevMile = Number(mile);
        const prevFt = Number(ft);
        const prevInch = Number(inch);
        const prevYard = Number(yard);

        if (entryIn === 'kmEntry') {
            const mtr = (prevKm * 1000);
            const cemi = (prevKm * 1000 * 100);
            const ml = (prevKm * 1000 * 100 * 10);
            const mls = (prevKm / 1.609);
            const foot = (prevKm * 3280.8399);
            const inc = (prevKm * 39370.0787);
            const yd = (prevKm * 1093.6133);
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'meterEntry') {
            const kilo = (prevMeter / 1000);
            const cemi = (prevMeter * 100);
            const ml = (prevMeter * 100 * 10);
            const mls = (prevMeter / 1609);
            const foot = (prevMeter * 3.2808399);
            const inc = (prevMeter * 39.3700787);
            const yd = (prevMeter * 1.0936133);
            setKm(kilo.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'cmEntry') {
            const kilo = (prevCm / 100000);
            const mtr = (prevCm / 100);
            const ml = (prevCm * 10);
            const mls = (prevCm / 160900);
            const foot = (prevCm / 30.48);
            const inc = (prevCm / 2.54);
            const yd = (prevCm / 91.44);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'mmEntry') {
            const kilo = (prevMm / 1000000);
            const mtr = (prevMm / 1000);
            const cemi = (prevMm / 10);
            const mls = (prevMm / 1609000);
            const foot = (prevMm / 304.8);
            const inc = (prevMm / 25.4);
            const yd = (prevMm / 914.4);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'mileEntry') {
            const kilo = (prevMile * 1.609);
            const mtr = (prevMile * 1609);
            const cemi = (prevMile * 160900);
            const ml = (prevMile * 1609000);
            const foot = (prevMile * 5280);
            const inc = (prevMile * 63360);
            const yd = (prevMile * 1760);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'ftEntry') {
            const kilo = (prevFt / 3281);
            const mtr = (prevFt / 3.281);
            const cemi = (prevFt * 30.48);
            const ml = (prevFt * 304.8);
            const mls = (prevFt / 5280);
            const inc = (prevFt * 12);
            const yd = (prevFt / 3);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setInch(inc.toFixed(3));
            setYard(yd.toFixed(3));
        } else if (entryIn === 'inchEntry') {
            const kilo = (prevInch / 39370);
            const mtr = (prevInch / 39.37);
            const cemi = (prevInch * 2.54);
            const ml = (prevInch * 25.4);
            const mls = (prevInch / 63360);
            const foot = (prevInch / 12);
            const yd = (prevInch / 36);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setYard(yd.toFixed(3));
        } else {
            const kilo = (prevYard / 1094);
            const mtr = (prevYard / 1.094);
            const cemi = (prevYard * 91.44);
            const ml = (prevYard * 914.4);
            const mls = (prevYard / 1760);
            const foot = (prevYard * 3);
            const inc = (prevYard * 36);
            setKm(kilo.toFixed(3));
            setMeter(mtr.toFixed(3));
            setCm(cemi.toFixed(3));
            setMm(ml.toFixed(3));
            setMile(mls.toFixed(3));
            setFt(foot.toFixed(3));
            setInch(inc.toFixed(3));
        }
    }

    return (
        <LinearGradient
            colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
            end={{ x: 1, y: 2 }}
            style={styles.length}
        >
            <StatusBar backgroundColor='#e4dbc7' barStyle='dark-content' />
            <View style={styles.page}>
                <View style={styles.display}>
                    <TouchableOpacity onPress={() => setEntryIn('kmEntry')} style={[styles.entries, entryIn === 'kmEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Kilometer:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{km}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('meterEntry')} style={[styles.entries, entryIn === 'meterEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Meter:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{meter}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('cmEntry')} style={[styles.entries, entryIn === 'cmEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Centimeter:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{cm}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('mmEntry')} style={[styles.entries, entryIn === 'mmEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Millimeter:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{mm}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('mileEntry')} style={[styles.entries, entryIn === 'mileEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Mile:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{mile}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('ftEntry')} style={[styles.entries, entryIn === 'ftEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Foot:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{ft}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('inchEntry')} style={[styles.entries, entryIn === 'inchEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Inch:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{inch}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEntryIn('yardEntry')} style={[styles.entries, entryIn === 'yardEntry' ? { borderColor: '#000' } : { borderColor: '#95a5a6' }]}>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>Yard:</Text>
                        <Text style={{ fontWeight: '500', color: '#34495e' }}>{yard}</Text>
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

export default Length

const styles = StyleSheet.create({
    length: {
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