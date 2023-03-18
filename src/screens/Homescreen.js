import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileImage from '../components/ProfileImage'
import Stories from '../components/Stories'
import Post from '../components/Post'
import Feed from '../components/Feed'



const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Feed/>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    margin:3,
  },

})