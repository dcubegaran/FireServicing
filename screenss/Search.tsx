// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleButton from './help';

const App = () => {
  return (
    <View style={styles.container}>
      <CircleButton onPress={() => console.log('Button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
