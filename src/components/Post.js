import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const Post = () => (
        
      <View style={styles.container}>
        <Header/>
        <Body/>
        <Footer/>
      </View>
    )

const styles = StyleSheet.create({
})

export default Post