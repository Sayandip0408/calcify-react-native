import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import OnBoarding from './screens/OnBoarding';
import Home from './screens/Home';
import SplashScreen from './screens/SplashScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

import LinearGradient from 'react-native-linear-gradient';
import Scientific from './screens/Scientific';
import BMI from './screens/BMI';
import Discount from './screens/Discount';
import Loan from './screens/Loan';
import Temperature from './screens/Temperature';
import Length from './screens/Length';
import Weight from './screens/Weight';
import Data from './screens/Data';
import NumberSystem from './screens/NumberSystem';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(width * 0.75)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? 0 : width * 0.75,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);

  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
      <LinearGradient
        colors={['#e4dbc7', '#7D9290', '#E4E5E0']}
        end={{ x: 1, y: 2 }}
        style={styles.gradient}
      >
        <TouchableOpacity onPress={toggleDrawer} style={{ alignSelf: 'flex-end', margin: 5 }}>
          <FontAwesomeIcon
            name="close"
            size={25}
            color="#34495e"
          />
        </TouchableOpacity>
        <View style={styles.routes}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Scientific');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <MaterialCommunityIcons
              name="math-compass"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Scientific Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BMI');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <IoniconsIcon
              name="body"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Body Mass Index</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Discount');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <Fontisto
              name="shopping-sale"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Discount Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Loan');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <FontAwesomeIcon
              name="rupee"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Loan EMI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Temperature');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <FontAwesome5Icon
              name="cloud-sun"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Temperature</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Length');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Length</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Weight');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <FontAwesome5Icon
              name="weight"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Weight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Data');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <FontAwesome5Icon
              name="sd-card"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Data Converter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Number');
              toggleDrawer();
            }}
            style={styles.route}
          >
            <Octicons
              name="number"
              size={25}
              color="#34495e"
            />
            <Text style={styles.routeText}>Number System</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const AppNavigator = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Calcify',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={{
            headerStyle: { backgroundColor: '#CFC3A8' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            }
          }}
        />
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{
            headerStyle: { backgroundColor: '#CFC3A8' },
            headerTintColor: '#000',
            title: ''
          }}
        />
        <Stack.Screen
          name='Scientific'
          component={Scientific}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Calcify Scientific',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='BMI'
          component={BMI}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Body Mass Index',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Discount'
          component={Discount}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Discount',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Loan'
          component={Loan}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Loan EMI',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Temperature'
          component={Temperature}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Temperature',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Length'
          component={Length}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Length',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Weight'
          component={Weight}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Weight',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Data'
          component={Data}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Data Converter',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='Number'
          component={NumberSystem}
          options={{
            headerStyle: { backgroundColor: '#e4dbc7' },
            headerTintColor: '#34495e',
            title: 'Number System',
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: 'Arial'
            },
            headerRight: () => (
              <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesomeIcon
                  name={isDrawerOpen ? "close" : "bars"}
                  size={25}
                  color="#34495e"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75,
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  routes: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  route: {
    height: 100,
    width: '45%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    elevation: 2,
    flexGrow: 1,
    backgroundColor: '#e4dbc7',
  },
  items: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeText: {
    fontWeight: '500',
    color: '#34495e'
  },
});
