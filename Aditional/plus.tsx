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
  {
    id: '1',
    topic: 'Emergency Evacuation Plan',
    definition: (
      <Text>
        <Text style={{ fontWeight: 'bold',color:'white' }}>Identify Emergency Exits:</Text>{'\n'} Identify all emergency exits in the building. These exits should be easily accessible and clearly marked.{'\n'}
        <Text style={{ fontWeight: 'bold', color:'white' }}>Establish Escape Routes:</Text>{'\n'} Establish primary and secondary escape routes from each area of the building to the nearest emergency exit. Ensure that these routes are unobstructed and well-lit.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}> Designate Assembly Points: </Text>{'\n'} Designate assembly points outside the building where occupants should gather after evacuating. These points should be a safe distance from the building and easily accessible to emergency responders.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}>Assign Responsibilities: </Text>{'\n'}Assign specific responsibilities to designated employees or volunteers to assist with the evacuation process, such as guiding occupants to exits or checking rooms for any remaining occupants.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}>Communicate the Plan:</Text>{'\n'} Ensure that all occupants are aware of the evacuation plan. Conduct regular drills to practice the plan and familiarize occupants with evacuation procedures.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}> Provide Training: </Text>{'\n'} Provide training to employees on how to respond in the event of a fire. This should include how to use fire extinguishers, when to evacuate, and how to assist others in evacuating.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}>Implement Fire Safety Measures: </Text>{'\n'}Install and maintain fire safety equipment, such as smoke detectors, fire alarms, and fire extinguishers. Ensure that these devices are regularly inspected and in working condition.{'\n'}
        <Text style={{ fontWeight: 'bold',color:'white' }}> Review and Update the Plan:</Text>{'\n'} Regularly review and update the evacuation plan to account for any changes in the building layout, occupancy, or emergency procedures.
      </Text>
    ),
  },
  { id: '2', topic: 'Fire Prevention Tips', definition: (<Text> <Text style={{ fontWeight: 'bold',color:'white' }}>Smoke Alarms:</Text> {'\n'}Install smoke alarms on every level of your home, inside bedrooms, and outside sleeping areas. Test them monthly and replace the batteries at least once a year.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Cooking Safety:</Text>{'\n'} Never leave cooking unattended, and keep flammable items away from the stove. Turn pot handles inward to prevent accidental spills.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Heating Equipment:</Text>{'\n'} Keep portable heaters at least three feet away from anything that can burn, and turn them off when leaving the room or going to bed.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Electrical Safety:</Text>{'\n'} Replace or repair frayed cords and don’t overload outlets or extension cords. If you detect a burning smell from an appliance, unplug it immediately.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Smoking Safety:</Text>{'\n'} If you smoke, do so outside. Use deep, sturdy ashtrays and ensure cigarettes are completely extinguished before disposal.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Candle Safety:</Text>{'\n'} Keep candles in sturdy holders and on a stable surface. Never leave them unattended and keep them away from children, pets, and anything that can catch fire.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Fireplace Safety:</Text>{'\n'} Have your chimney inspected and cleaned annually. Use a fireplace screen to prevent sparks from flying into the room.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Fire Extinguishers: </Text>{'\n'}Keep a fire extinguisher in the kitchen and on each floor of your home. Learn how to use it and ensure it is regularly maintained.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Escape Plan: </Text>{'\n'} Create and practice a fire escape plan with your family. Know two ways out of every room and designate a meeting place outside.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Stay Informed: </Text>{'\n'}Stay informed about fire safety by attending fire prevention events, reading fire safety materials, and staying updated with local fire codes.{'\n'}
    </Text>)},
  { id: '3', topic: 'Fire Detection and Alarm System', definition: (<Text> <Text style={{ fontWeight: 'bold',color:'white' }}>Detection Devices: </Text>:{'\n'} Fire detection systems use smoke detectors, heat detectors, or both to sense the presence of fire or smoke. Smoke detectors are more common and can be either ionization or photoelectric.{'\n'}
  <Text style={{ fontWeight: 'bold',color:'white' }}>Alarm Systems: </Text>{'\n'} When a detection device is triggered, the fire alarm system activates audible and visual alarms to alert occupants. Alarms can include sirens, horns, bells, or strobe lights.{'\n'}
  <Text style={{ fontWeight: 'bold',color:'white' }}>Monitoring:</Text>{'\n'}Some systems are connected to a monitoring service that alerts emergency services automatically when a fire is detected, even if the building is unoccupied.{'\n'}
  </Text>) },
  { id: '4', topic: 'Fire Extinguisher Use', definition:(<Text>
  <Text style={{ fontWeight: 'bold',color:'white' }}>  Types of Fire Extinguishers:</Text> {'\n'}There are different types of fire extinguishers designed to combat specific types of fires. The most common types include:{'\n'}
Class A: For ordinary combustibles such as wood, paper, and cloth.{'\n'}
Class B: For flammable liquids like gasoline, oil, and grease.{'\n'}
Class C: For electrical fires involving appliances, wiring, or other electrical sources.{'\n'}
Class D: For flammable metals.{'\n'}
Class K: For kitchen fires involving cooking oils and fats.{'\n'}
<Text style={{ fontWeight: 'bold',color:'white' }}>Using a Fire Extinguisher:</Text>
Pull the pin: Pull the pin at the top of the extinguisher to break the seal.{'\n'}
Aim at the base: Aim the nozzle or hose at the base of the fire, not the flames.{'\n'}
Squeeze the handle: Squeeze the handle to release the extinguishing agent.{'\n'}
Sweep from side to side: Sweep the nozzle or hose from side to side until the fire is extinguished.{'\n'}
<Text style={{ fontWeight: 'bold',color:'white' }}>Safety Precautions:</Text>{'\n'}
Ensure everyone is evacuated from the area before attempting to use a fire extinguisher.
Use the extinguisher only if you have been trained to do so and if it is safe to approach the fire.
Do not turn your back on the fire. Always have a clear escape route behind you.{'\n'}
<Text style={{ fontWeight: 'bold',color:'white' }}>Maintenance and Inspection:</Text>{'\n'}
Fire extinguishers should be regularly inspected and maintained according to the manufacturer's instructions.
Check the pressure gauge regularly to ensure the extinguisher is fully charged.{'\n'}
<Text style={{ fontWeight: 'bold',color:'white' }}>Limitations:</Text>{'\n'}
Fire extinguishers have limitations and should only be used on small fires. If the fire is large or spreading rapidly, evacuate immediately and call the fire department.
{'\n'}
  </Text>) },
  { id: '5', topic: 'Emergency Contact', definition:(<Text>
    <Text style={{ fontWeight: 'bold',color:'white' }}>In India, the telephone number 101 is used for fire emergencies. When you dial 101, your call will be connected to the local fire department or fire brigade, where trained operators can dispatch fire-fighting resources to your location.</Text>{'\n'}

    <Text style={{ fontWeight: 'bold',color:'white' }}>Fire Department:</Text> The local fire department's emergency number is the most important contact for a fire emergency. In many countries, this number is 911, but it may vary depending on your location.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Building Management:</Text> If you live in an apartment or work in a building, include the contact information for the building management or landlord. They can provide information about fire safety procedures and evacuation plans specific to your building.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Neighbors:</Text> Include the contact information for neighbors who can help in case of a fire emergency, such as alerting others in the building or assisting with evacuation.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Family and Friends:</Text> Have the contact numbers of family members or friends who can assist you in case of a fire emergency, such as providing temporary accommodation or support.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Insurance Provider:</Text> Include the contact information for your insurance provider in case you need to report damages or file a claim after a fire.{'\n'}
Utility Companies: Include the contact information for gas, water, and electricity companies in case of utility-related fire emergencies.{'\n'}


  </Text>) },
  { id: '6', topic: 'Training and Drills', definition: (<Text>
    <Text style={{ fontWeight: 'bold',color:'white' }}>Fire Safety Education:</Text> Provide education on fire prevention, the importance of early detection, and proper use of fire safety equipment.{'\n'}

    <Text style={{ fontWeight: 'bold',color:'white' }}>Evacuation Procedures:</Text> Teach individuals how to safely evacuate a building in case of a fire, including identifying escape routes and assembly points.{'\n'}

    <Text style={{ fontWeight: 'bold',color:'white' }}>Fire Extinguisher Training:</Text> Train individuals on how to properly use fire extinguishers, including the different types of extinguishers and the types of fires they can be used on.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Emergency Contact Information:</Text> Ensure that everyone knows the emergency contact numbers for the fire department and other relevant emergency services.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Regular Drills:</Text> Conduct regular fire drills to practice evacuation procedures and ensure that everyone knows what to do in an emergency.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Mock Scenarios:</Text> Create mock fire scenarios to simulate real-life situations and test the effectiveness of emergency response plans.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Review and Feedback:</Text> After each drill, review the results and gather feedback from participants to identify areas for improvement.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Documentation:</Text> Keep records of training sessions and drills, including attendance and any observations or feedback, to track progress and compliance.{'\n'}

  </Text>) },
  { id: '7', topic: 'Regulatory Compliance', definition: (<Text>
   <Text style={{ fontWeight: 'bold',color:'white' }}> Building Codes:</Text> Buildings must comply with local building codes that specify requirements for fire-resistant construction materials, fire alarm systems, emergency exits, and other safety features.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Fire Safety Equipment: </Text>Regulations may require the installation and maintenance of fire safety equipment, such as fire extinguishers, smoke detectors, and sprinkler systems.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Emergency Plans:</Text> Building owners or managers may be required to develop and maintain emergency plans that outline procedures for evacuating occupants in case of fire.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Inspections and Testing: </Text>Regular inspections and testing of fire safety equipment may be mandated to ensure that they are in working condition.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Occupancy Limits:</Text> Regulations may specify occupancy limits for buildings to ensure that they can be evacuated safely in case of fire.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Training and Drills: </Text>Employers may be required to provide fire safety training to employees and conduct regular fire drills to ensure preparedness.{'\n'}
   <Text style={{ fontWeight: 'bold',color:'white' }}>Documentation:</Text> Compliance often requires maintaining records of inspections, testing, training, and drills to demonstrate adherence to regulations.{'\n'}

  </Text>) },
  { id: '8', topic: 'Reporting Procedures', definition:(<Text>
    <Text style={{ fontWeight: 'bold',color:'white' }}> Immediate Notification: </Text>In the event of a fire, the first step is to immediately notify the fire department by calling the emergency number .(101 in INDIA),(911 in many countries).{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Alerting Occupants: </Text>If safe to do so, alert other occupants of the building by activating the fire alarm system. This can help ensure that everyone is aware of the fire and can evacuate safely.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Evacuation: </Text>Follow the building's evacuation plan and evacuate the building using the designated escape routes. Do not use elevators during a fire evacuation.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Assembly Point: </Text>Proceed to the designated assembly point outside the building to ensure that everyone is safely accounted for.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Reporting to Authorities: </Text>Once outside the building, report the fire to the appropriate authorities, such as the fire department or building management, if you have not already done so.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Provide Information: </Text> Provide any relevant information to the authorities, such as the location of the fire, any known hazards, and the number of people evacuated.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Assist Authorities: </Text>Follow any instructions given by the fire department or other emergency responders to assist in the firefighting or evacuation efforts.{'\n'}
    <Text style={{ fontWeight: 'bold',color:'white' }}>Follow-Up:</Text> After the fire has been extinguished and it is safe to do so, follow up with authorities or building management to provide any additional information or assistance as needed.{'\n'}


  </Text>) },
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
    backgroundColor:'#b40911'
  },
  modalContent: {
    flex: 1,
    //backgroundColor:'red'
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    //backgroundColor:'red'
    color:'#fca311'
  },
  modalBody: {
    fontSize: 18,
    lineHeight: 24,
    //backgroundColor:'red'
    color:'pink'
  },
  modalCloseButton: {
    backgroundColor: 'orange',
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
