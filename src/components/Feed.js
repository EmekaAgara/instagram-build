import{StyleSheet,TextInput,View, Text, Image, FlatList}from'react-native';
import React, { Component } from 'react'
import Post from './Post';
import Stories from './Stories';

const data = [
    {
        user: {
        imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name:'John',
        location:'Lagos Nigeria'
        },
        imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        caption:'This is a test instagram caption just testing out the ...',
        likes:'2.5k likes • 120 comments',
        postedAt:'5 minutes ago',
    },

    {
        user: {
        imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name:'John',
        location:'Lagos Nigeria'
        },
        imageUri:'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        caption:'This is a test instagram caption just testing out the ...',
        likes:'2.5k likes • 120 comments',
        postedAt:'5 minutes ago',
    },

    {
        user: {
        imageUri:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        name:'John',
        location:'Lagos Nigeria'
        },
        imageUri:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        caption:'This is a test instagram caption just testing out the ...',
        likes:'2.5k likes • 120 comments',
        postedAt:'5 minutes ago',
    },

    {
        user: {
        imageUri:'https://images.unsplash.com/photo-1670272498456-a9f02e3cead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name:'John',
        location:'Lagos Nigeria'
        },
        imageUri:'https://images.unsplash.com/photo-1670272498456-a9f02e3cead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        caption:'This is a test instagram caption just testing out the ...',
        likes:'2.5k likes • 120 comments',
        postedAt:'5 minutes ago',
    },

    {
        user: {
        imageUri:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        name:'John',
        location:'Lagos Nigeria'
        },
        imageUri:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        caption:'This is a test instagram caption just testing out the ...',
        likes:'2.5k likes • 120 comments',
        postedAt:'5 minutes ago',
    },
]



const Feed = () => (
    <FlatList
        data={data}
        renderItem={({item}) => <Post post={item}/>}
        ListHeaderComponent={Stories}
    />
)

const styles = StyleSheet.create({

})

export default Feed