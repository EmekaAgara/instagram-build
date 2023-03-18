import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Footer = ({likes, caption,postedAt,user}) => (
  <View style={styles.container}>

    <View style={styles.IconsContainer}>
      <View style={styles.LeftIcons}>
        <Feather name="heart" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </View>

      <FontAwesome name="bookmark-o" size={24} color="black" />

    </View>


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

  LeftIcons:{
    flexDirection:'row',
    width:95,
    justifyContent:'space-between',
  },

  IconsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10,
    paddingBottom:5
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