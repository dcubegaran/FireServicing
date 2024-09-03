import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmation.verificationId);
      Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      await auth().signInWithCredential(credential);
      Alert.alert('Success', 'OTP verified successfully.');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'Failed to verify OTP. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Phone Number:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={handleSendOTP} />
      <Text>Enter OTP:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default PhoneAuthScreen;
