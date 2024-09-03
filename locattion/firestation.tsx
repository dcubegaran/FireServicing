import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking,Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {

  const [latitude, setLatitude] = useState<number | null>(null);
const [longitude, setLongitude] = useState<number | null>(null);


  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleFindNearest = () => {
    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/fire+station/@${latitude},${longitude}`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Button title="Find Nearest Fire Station" onPress={handleFindNearest} />
    </View>
  );
};

export default App;
