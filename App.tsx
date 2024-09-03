
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentInsert from './StudentInsert'; 
import OtherScreen from './Homescreen'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StudentInsert} />
        <Stack.Screen name="Screen" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
