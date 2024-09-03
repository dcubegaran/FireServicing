
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VersionNumber from 'react-native-version-number';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>App Version</Text>
      <Text style={styles.versionText}>Version: {VersionNumber.appVersion}</Text>
      <Text style={styles.versionText}>Build: {VersionNumber.buildVersion}</Text>
      <Text style={styles.versionText}>Bundle Identifier: {VersionNumber.bundleIdentifier}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b40911',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fca311',
  },
  versionText: {
    fontSize: 16,
    marginBottom: 10,
    color:"white",
  },
});

export default Notifications;
