import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'


const Footer = ({likes, caption,postedAt,user}) => (
  <View style={styles.container}>
    <Text style={styles.likes}>{likes}</Text>

    <View style={styles.CaptionContainer}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.caption}> {caption}</Text>
    </View>

    <Text style={styles.postedat}>{postedAt}</Text>
  </View>

)

const styles = StyleSheet.create({

  container:{
    paddingTop:10,
    paddingLeft:10

  },

  likes:{
    fontWeight:'bold',
    paddingBottom:4
    

  },

  CaptionContainer:{
    display:'flex',
    flexDirection:'row',
    paddingBottom:4


  },

  user:{
    fontWeight:'bold'


  },

  caption:{

  },

  postedat:{
    color:'gray'

  },

})

export default Footer