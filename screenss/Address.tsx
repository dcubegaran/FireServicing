
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Address = () => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this cool app!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error: Error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Share with Others</Text>
      <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
        <Icon name="share" size={24} color="#FF5733" />
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fca311'
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fca311',
    padding: 10,
    borderRadius: 5,
  },
  shareButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Address;
