import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import CircleButton from './hlp';


  const HomeScreen = () => {
    const handlePress = () => {
      console.log('Button pressed');
    };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <CircleButton onPress={handlePress} />
    </View>
  );
}

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

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HLP" component={HomeScreen} />
      <Tab.Screen name="Safety Tips" component={SettingsScreen} />
      <Tab.Screen name="Game" component={ProfileScreen} />
      <Tab.Screen name="Geoloction" component={AboutScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Homes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//<View style={{flex:1}}>