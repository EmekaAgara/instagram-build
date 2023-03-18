import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import ProfileImage from './ProfileImage';


const Header = ({imageUri, name,location}) => (
  <View style={styles.container}>
    <ProfileImage 
      style={styles.image}
      uri={imageUri} size={35}
    />

    <View style={styles.nameContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  </View>

)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingTop:15
  },

  nameContainer:{
    display:'flex',
    flexDirection:'row',
    paddingBottom:4,
    marginTop:-10
    // textAlignVertical:'center'
  },

  image:{
    alignSelf:'center'

  },

  name:{
    alignSelf:'center',
    fontWeight:'bold',
    color:''
  },

  location:{
    // alignSelf:'flex-end',
    fontSize:11,
    marginLeft:-31,
    marginTop:37
    
  }

})

export default Header