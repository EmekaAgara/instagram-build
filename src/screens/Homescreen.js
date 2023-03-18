import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileImage from '../components/ProfileImage'
import Stories from '../components/Stories'
import Post from '../components/Post'


const post ={
  user: {
    imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name:'John'
  },

  imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
}


const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stories/>
      <Post post={post}/>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    margin:3,
  },

})