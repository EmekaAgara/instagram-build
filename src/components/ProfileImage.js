import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'


const ProfileImage = ({uri}) => (
        
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri}}
        />
      </View>
    )

const styles = StyleSheet.create({

    container: {
        height:86,
        width:86,
        margin:10,
        borderRadius:50,
        borderWidth:3,
        borderColor:"radial-gradient(circle at 10% 20%, rgb(134, 47, 199) 0%, rgb(235, 56, 137) 90%);",
    },


    image: {
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:2.5,
        borderColor:"#ffffff"
    },
})

export default ProfileImage