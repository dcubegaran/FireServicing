import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CircleButton from './bar/hlp';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

function Edit({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
function About({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
function Share({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
function Ratings({ navigation }) {
  return (
    <View style={styles.container}>
     
    </View>
  );
}
function Use({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
function Version({ navigation }) {
  return (
    <View style={styles.container}>
     
    </View>
  );
}
function Settting({ navigation }) {
  return (
    <View style={styles.container}>
 
    </View>
  );
}
function Contact({ navigation }) {
  return (
    <View style={styles.container}>
     
    </View>
  );
}
const Hom = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
      <CircleButton onPress={handlePress} /> {/* Use the CircleButton component */}
    </View>
  );
};
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Safety Tips</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Game</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Geoloction</Text>
    </View>
  );
}


function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Edit" component={Edit} />
      <Drawer.Screen name="About App" component={About} />
      <Drawer.Screen name="Share with Others" component={Share} />
      <Drawer.Screen name="Ratings" component={Ratings} />
      <Drawer.Screen name="How to Use" component={Use} />
      <Drawer.Screen name="Setting" component={Settting} />
      <Drawer.Screen name="Version" component={Version} />
      <Drawer.Screen name="Emergency Contact" component={Contact} />
    </Drawer.Navigator>
  );
}
function TabNavigator() {
  return (
   
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="HlP" component={Hom} />
      <Tab.Screen name="Safety Tips" component={SettingsScreen}
       />
      <Tab.Screen name="Game" component={ProfileScreen} />
      <Tab.Screen name="Geoloction" component={AboutScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
