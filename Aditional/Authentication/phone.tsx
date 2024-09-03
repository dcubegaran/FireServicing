import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableWithoutFeedback, Modal, TextInput, View, Text, SafeAreaView, Image, Alert } from "react-native";
import { TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface Area {
  code: string;
  item: string;
  callingCode: string;
  flag: string;
}

export default function App() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        let areaData = data.map((item: any) => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.name}`
          };
        });

        setAreas(areaData);
        let defaultData = areaData.find((a: { code: string; }) => a.code === "US");
        if (defaultData) {
          setSelectedArea(defaultData);
        }
      });
  }, []);

  const renderAreasCodesModal = () => {
    const renderItem = ({ item }: { item: Area }) => (
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: "row"
        }}
        onPress={() => {
          setSelectedArea(item);
          setModalVisible(false);
        }}
      >
        <Image
          source={{ uri: item.flag }}
          style={{ height: 30, width: 30, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, color: "#fff" }}>{item.item}</Text>
      </TouchableOpacity>
    );

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <View style={{ height: 400, width: width * 0.8, backgroundColor: "#342342", borderRadius: 12 }}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                style={{ padding: 20 }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  const handleVerify = () => {
    // Check if a country code is selected
    if (!selectedArea) {
      Alert.alert("Error", "Please select a country code");
      return;
    }

    // Check if phone number is entered
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter your phone number");
      return;
    }

    // Send OTP and phone number to backend
    fetch("http://10.0.2.2:80/demo/savePhoneNumber.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: selectedArea.callingCode + phoneNumber }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // OTP verification successful, navigate to the next screen
          // You can use navigation libraries like React Navigation for this
          console.log("OTP verified successfully");
        } else {
          Alert.alert("Error", "OTP verification failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        Alert.alert("Error", "Something went wrong");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "#111", fontSize: 32, marginVertical: 80 }}>Telegram</Text>
          <Text style={{ color: "#111", fontSize: 25 }}>Phone Number</Text>
          <Text style={{ fontSize: 15, color: "#111" }}>Add a new phone number</Text>
          <View style={{ width: "100%", paddingHorizontal: 22, paddingVertical: 60 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  marginHorizontal: 5,
                  borderBottomColor: "#111",
                  borderBottomWidth: 1,
                  flexDirection: "row"
                }}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ justifyContent: "center" }}>
                  {/* Placeholder for the arrow icon */}
                </View>
                <View style={{ justifyContent: "center", marginLeft: 5 }}>
                  <Text style={{ color: "#111", fontSize: 12 }}>{selectedArea?.callingCode}</Text>
                </View>
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1,
                  marginVertical: 10,
                  borderBottomColor: "#111",
                  borderBottomWidth: 1,
                  height: 40,
                  fontSize: 20,
                  color: "#111"
                }}
                placeholder="Enter your phone number"
                placeholderTextColor="#111"
                selectionColor="#111"
                keyboardType="numeric"
                onChangeText={setPhoneNumber}
              />
            </View>
            <TouchableOpacity
              onPress={handleVerify}
              style={{
                backgroundColor: "#342342",
                paddingVertical: 12,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                marginVertical: 32
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {renderAreasCodesModal()}
      </ScrollView>
    </SafeAreaView>
  );
}
