import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import ProfileImage from './ProfileImage';


const Story = ({imageUri, name}) => (
        
      <View style={styles.container}>
        <ProfileImage uri={imageUri}/>
        <Text style={styles.name}>{name}</Text>
      </View>
    )

const styles = StyleSheet.create({
  name:{
    textAlign:'center'
  }

})

export default Story