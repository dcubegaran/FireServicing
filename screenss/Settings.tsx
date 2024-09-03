import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.setting}>
        <Icon name="bell" size={24} color="#FF5733" />
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>
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
    color:'#fca311'
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color:'white',
  },
});

export default Setting;
