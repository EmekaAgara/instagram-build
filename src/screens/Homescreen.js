import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileImage from '../components/ProfileImage'
import Stories from '../components/Stories'
import Post from '../components/Post'

const Homescreen = () => {
  return (
    <SafeAreaView>
      <Stories/>
      <Post/>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})