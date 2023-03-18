import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'


const Body = ({imageUri}) => (
  <View style={styles.container}>
    <Image source={{uri: imageUri}} style={styles.image}/>
  </View>

)
const styles = StyleSheet.create({

  image:{
    width:'100%',
    height:400,
    marginTop:3
  },

})

export default Body