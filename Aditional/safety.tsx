import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';

const safetyTipsData = [
  { id: '1', topic: 'Emergency Evacuvation Plan', definition: 'Fire safety is the set of practices intended to reduce the risk of fire.' },
  { id: '2', topic: 'Fire Prevention Tips', definition: 'Home security involves the security hardware in place on a property.' },
  { id: '3', topic: 'Fire Detection and Alaram System', definition: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.' },
  { id: '4', topic: 'Fire Extinguisher Use', definition: 'Definition 4' },
  { id: '5', topic: 'Emergency Contact', definition: 'Definition 5' },
  { id: '6', topic: 'Training and Drills', definition: 'Definition 6' },
  { id: '7', topic: 'Regulatory Complaience', definition: 'Definition 7' },
  { id: '8', topic: 'Topic 8', definition: 'Definition 8' },
];

export default function SafetyTipsApp() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.topicBox}
      onPress={() => setSelectedTopic(item)}
    >
      <Text style={styles.topicBoxText}>{item.topic}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={safetyTipsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={!!selectedTopic}
        onRequestClose={() => setSelectedTopic(null)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>{selectedTopic?.topic}</Text>
              <Text style={styles.modalBody}>{selectedTopic?.definition}</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setSelectedTopic(null)}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  topicBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  topicBoxText: {
    fontSize: 16,
    color: '#075eec',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  modalContent: {
    flex: 1,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalBody: {
    fontSize: 18,
    lineHeight: 24,
  },
  modalCloseButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
