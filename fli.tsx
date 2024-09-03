import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';
import auth from './datapost/firebase'; // Assuming firebase.ts is in the same directory
import firebase from './datapost/firebase';



interface LoginProps {
  navigation: any; // Assuming you're using a navigation library
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      await (auth as any)().signInWithEmailAndPassword(email, password);

      navigation.navigate('Home'); // Navigate to home screen after successful login
    } catch (error) {
      console.error(error);
      // Handle errors gracefully (display user-friendly messages)
      Alert.alert('Login failed. Please check your email and password.'); // Example basic error message
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
