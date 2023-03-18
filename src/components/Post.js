import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const Post = ({post}) => (
  <View style={styles.container}>
    <Header imageUri={post.user.imageUri} name={post.user.name} location={post.user.location}/>
    <Body imageUri={post.imageUri}/>
    <Footer
      likes={post.likes}
      caption={post.caption}
      postedAt={post.postedAt}
      user={post.user.name}
    
    />
  </View>
  
)

const styles = StyleSheet.create({
})

export default Post