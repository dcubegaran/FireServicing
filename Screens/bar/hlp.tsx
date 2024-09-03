
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CircleButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
    
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>HLP</Text>
      </TouchableOpacity>
      <Text style={styles.press}>PRESS THE BUTTON IN EMERGENCY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  press:{
    color:'red',
    fontWeight:'bold',
    position: 'absolute',
    bottom: 200,
    alignItems: 'center',
    paddingBottom: 1,
    fontSize:20
  }
});

export default CircleButton;
