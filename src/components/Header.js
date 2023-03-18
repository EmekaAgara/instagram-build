import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import ProfileImage from './ProfileImage';
import { Entypo } from '@expo/vector-icons'; 


const Header = ({imageUri, name,location}) => (
  <View style={styles.container}>
     <View style={styles.left}>
    <ProfileImage 
      style={styles.image}
      uri={imageUri} size={35}
    />

    <View style={styles.nameContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text> 
      <View>
    </View>

      <View style={styles.icon}>
        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>

      </View>
    </View>

    
  </View>

)

const styles = StyleSheet.create({
  container: {
    
    
    
  },

  icon:{
    paddingLeft:'69%',
    alignSelf:'center'
  },

  left:{
    flexDirection:'row',
    paddingTop:15,
    
  },

  nameContainer:{
    display:'flex',
    flexDirection:'row',
    paddingBottom:4,
    marginTop:-10,
    justifyContent:'space-between'
    // textAlignVertical:'center'
  },

  image:{
    alignSelf:'center'

  },

  name:{
    alignSelf:'center',
    fontWeight:'bold',
  },

  location:{
    // alignSelf:'flex-end',
    fontSize:11,
    marginLeft:'-11%',
    marginTop:37
    
  }

})

export default Header