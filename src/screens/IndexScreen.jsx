import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext)
  return (
    <View>
      <Button title='Add' onPress={() => addBlogPost({ title: 'test' })} />
      <FlatList
        data={data}
        keyExtractor={(blogPost, i) => `${i}`}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
