import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const Post = ({post}) => (
  <View style={styles.container}>
    <Header imageUri={post.user.imageUri} name={post.user.name}/>
    <Body imageUri={post.imageUri}/>
    <Footer/>
  </View>
  
)

const styles = StyleSheet.create({
})

export default Post