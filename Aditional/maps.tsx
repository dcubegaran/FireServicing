
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Emergency = () => {
  const emergencyNumber = '101';

  const handleCallEmergency = () => {
    Linking.openURL(`tel:${emergencyNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Emergency Contact</Text>
      <Text style={styles.description}>In case of emergency, dial:</Text>
      <TouchableOpacity onPress={handleCallEmergency} style={styles.callButton}>
        <Text style={styles.callButtonText}>{emergencyNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b40911',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fca311'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color:'white',
  },
  callButton: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 10,
  },
  callButtonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Emergency;