
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Alert, Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  useEffect(() => {
    const requestLocation = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs location to show you on maps.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => setCurrentLocation(position.coords),
            (error) => console.error(error.message),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 100000 }
          );
        } else {
          console.warn('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocation();
  }, []); // Empty dependency array to run effect only once

  const findNearbyFireStations = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      const url = `geo:${latitude},${longitude}?q=fire+station`;
      Linking.openURL(url);
    } else {
      Alert.alert('Location unavailable');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Your Location:</Text>
      {currentLocation ? (
        <>
          <Text>Latitude: {currentLocation.latitude}</Text>
          <Text>Longitude: {currentLocation.longitude}</Text>
        </>
      ) : (
        <Text>Loading location...</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={findNearbyFireStations}>
        <Text>Find Nearby Fire Stations</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#b40911',
    
  },
  button: {
    backgroundColor: '#fca311',
    padding: 10,
    margin: 10,
    
  },
});

export default Location;
