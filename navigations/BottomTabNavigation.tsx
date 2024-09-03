import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../constants'
import Ionicons from "react-native-vector-icons/Ionicons";
import  Home from "../screenss/Home";
import Message from "../screenss/Message";
import Orders from "../screenss/Orders";

import Search  from "../screenss/Search";
import Location from '../screenss/location';




const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === "ios" ? 90 : 60,
                    backgroundColor:"#fca311"
                }
            }}
        >
            <Tab.Screen
                name="DrawerHome"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.home : icons.homeOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: "#b40911"
                                }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.shoppingBag : icons.shoppingBagOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: "#b40911"
                                }}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#b40911",
                                height: Platform.OS === "android" ? 70 : 60,
                                width: Platform.OS === "android" ? 70 : 60,
                                top: Platform.OS === "android" ? -20 : -30,
                                borderRadius: Platform.OS === "android" ? 35 : 30,
                                borderWidth: 2,
                                borderColor: COLORS.white
                            }}>
                                
                                <Image
                                source={focused ? icons.Help : icons.Help}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.white : COLORS.white
                                }}
                            />    
                            </View>
                            
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.chat : icons.chatOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: "#b40911"
                                }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Location}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.user : icons.userOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: "#b40911"
                                }}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation