import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Button
        title='Add'
        onPress={() =>
          addBlogPost({ title: `Test number ${state.length + 1}` })
        }
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost, i) => `${i}`}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
