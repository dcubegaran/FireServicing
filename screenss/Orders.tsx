import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import DropdownBox from '../Aditional/plus'


const Orders = () => {
  return (
    <View style={styles.container}>
  <DropdownBox/>
    </View>
  )
}

export default Orders
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:70,
    },
  });
  