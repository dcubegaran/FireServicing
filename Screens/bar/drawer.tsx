import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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



export default function Navs() {
  return (
    <NavigationContainer>
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
