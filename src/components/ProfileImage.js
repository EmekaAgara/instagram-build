import{StyleSheet,TextInput,View, Text, Image}from'react-native';
import React, { Component } from 'react'


const ProfileImage = ({uri, size = 70}) => (
    <View style={[styles.container, {width:size + 6, height: size + 6}]}>
        <Image
            style={[styles.image, {width:size, height:size}]}
            source={{uri}}
        />
    </View>
    
)

const styles = StyleSheet.create({

    container: {
        margin:4,
        borderRadius:50,
        borderWidth:3,
        borderColor:"radial-gradient(circle at 10% 20%, rgb(134, 47, 199) 0%, rgb(235, 56, 137) 90%);",
    },


    image: {
        borderRadius:50,
        borderWidth:2.5,
        borderColor:"#ffffff"
    },
})

export default ProfileImage