
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Our Mission:</Text>
      <Text style={styles.text}>
Our mission is to protect and serve the community by providing rapid response to emergencies, 
promoting fire safety education, and collaborating with other agencies to enhance public safety.
      </Text>
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}> Our Values:</Text>
      <Text style={styles.text}>
     
Professionalism: We uphold the highest standards of professionalism in all aspects of our work.
Integrity: We act with integrity, honesty, and transparency in everything we do.
Service: We are dedicated to serving the community and ensuring the safety and well-being of all residents.
Teamwork: We believe in the power of teamwork and collaboration to achieve our goals.
Safety: We prioritize the safety of our firefighters, residents, and properties in all our operations.
      </Text>
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}> Our Services:</Text>
      <Text style={styles.text}>
Emergency Response: We provide rapid response to fires, medical emergencies, and other emergencies.
Fire Safety Education: We educate the community about fire safety and prevention through workshops, demonstrations, and outreach programs.
Community Engagement: We actively engage with the community through events, open houses, and volunteer opportunities.
      </Text>
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
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#fca311',
    
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color:'white'
  },
});

export default About;
