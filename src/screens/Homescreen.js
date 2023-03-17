import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileImage from '../components/ProfileImage'
import Stories from '../components/Stories'

const Homescreen = () => {
  return (
    <SafeAreaView>
      <Text>Homescreen</Text>
      <Stories/>

    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})