import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons } from '../constants';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuButton}
        >
          <Image
            source={icons.menu}
            resizeMode='contain'
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../assets/icons/images/avatar.jpg')}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to Fire Servicing App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
  },
  menuButton: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
  },
  menuIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 300, // Adjust the height as needed
    width: 300, // Adjust the width as needed
    marginBottom:50,
    borderRadius: 999,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#b40911'
  },
});

export default Home;
