import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import ProfileImage from './ProfileImage';


const Header = ({imageUri, name}) => (
  <View style={styles.container}>
    <ProfileImage uri={imageUri} size={40}/>
    <Text style={styles.name}>{name}</Text>
  </View>

)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingTop:15
  },

  name:{
    alignSelf:'center',
    fontWeight:'bold',
    color:''
  }

})

export default Header