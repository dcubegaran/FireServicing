import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Linking,Alert
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export interface CircleButtonProps {
  onPress: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onPress }) => {
  const handlePress = () => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const message = `I need help! My current location is: https://maps.google.com/?q=${latitude},${longitude}`;

        const whatsappNumber =
          'whatsapp://send?phone=+916383812225&text=' +
          encodeURIComponent(message);
        Linking.openURL(whatsappNumber);
      },
      (error) => {
        console.error('Error getting location:', error);
        Alert.alert('Error getting location. Please try again.');
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>HLP</Text>
      </TouchableOpacity>
      <Text style={styles.additionalText}>PRESS THE BUTTON IN EMERGENCY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#b40911',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  additionalText: {
    marginTop: 10,
    fontSize: 20,
    color: '#b40911',
    fontWeight: 'bold',
    left: 12,
  },
});

export default CircleButton;