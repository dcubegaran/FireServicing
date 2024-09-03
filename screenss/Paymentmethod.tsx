
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';

const PaymentMethod = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    // You can implement logic to submit the rating to your backend here
    console.log('User rated:', newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rate Us</Text>
      <Text style={styles.description}>Please rate your experience with our app:</Text>
      <Rating
        showRating
        imageSize={40}
        startingValue={rating}
        onFinishRating={handleRating}
        tintColor='#b40911'
      />
      <TouchableOpacity onPress={() => handleRating(0)} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Rating</Text>
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
    fontWeight:'bold',
  },
  clearButton: {
    marginTop: 20,
  },
  clearButtonText: {
    fontWeight:'bold',
    color: '#fca311',
    fontSize: 19,
  },
});

export default PaymentMethod;
