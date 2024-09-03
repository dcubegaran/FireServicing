
import { View, Text, Image, Settings } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, images } from "./constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import BottomTabNavigation from "./navigations/BottomTabNavigation";
import 
  Address from "./screenss/Address";
import Notifications from "./screenss/Notification";
 import Orders from "./screenss/Orders";
 import  PaymentMethod from "./screenss/Paymentmethod";

 import Search from "./screenss/Search";
 import Edit from "./screenss/Edit";
 import About from "./screenss/About";
 import Setting from "./screenss/Settings";
import { SafeAreaView } from "react-native-safe-area-context";
import  icons  from './constants/icons';
import Emergency from "./screenss/Emergency";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"#fca311",
              }}
            >
              <Image
                source={images.avatar}
                style={{
                  width: 100,
                      height: 100,
              borderRadius: 999,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color:"#b40911",
                  marginBottom: 6,
                }}
              >
                FIRE SHIELD
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color:"#b40911",
                }}
              >
                for our safety
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor:"white",
          width: 250,
        },
        headerStyle: {
          backgroundColor:"#b40911",
        },
        headerShown: false,
        headerTintColor:"#b40911",
        drawerLabelStyle: {
          color:"#b40911",
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
  name="Home"
  options={{
    drawerLabel: "Home",
    title: "Home",
    headerShadowVisible: false,
    drawerIcon: ({ focused, color, size }) => (
      <Image
        source={focused ? icons.home : icons.homeOutline}
        resizeMode="contain"
        style={{ width: size, height: size, tintColor:"#b40911" }}
      />
    ),
  }}


        component={BottomTabNavigation}
        
      />
      <Drawer.Screen
        name="Edit"
        options={{
          drawerLabel: "Edit",
          title: "Edit",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Edit : icons.Edit}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911" }}
            />
          ),
        }}
        component={Edit}
      />
      <Drawer.Screen
        name="About"
        options={{
          drawerLabel: "About App",
          title: "About App",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.About : icons.About}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor:"#b40911" }}
            />
          ),
        }}
        component={About}
      />
      <Drawer.Screen
        name="Wishlist"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Settings : icons.Settings}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911" }}
            />
          ),
        }}
        component={Setting}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: "Share with Others",
          title: "Share",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Share : icons.Share}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911" }}
            />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Method"
        options={{
          drawerLabel: "Rating",
          title: "Rating",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Rating : icons.Rating}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911"}}
            />
          ),
        }}
        component={PaymentMethod}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: "Version",
          title: "version",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Version : icons.Version}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911" }}
            />
          ),
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: "Emergency Contact",
          title: "Emergency Contact",
          headerShadowVisible: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.Contact : icons.Contact}
              resizeMode="contain"
              style={{ width: size, height: size, tintColor: "#b40911"}}
            />
          ),
        }}
        component={Emergency}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;