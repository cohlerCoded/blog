import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'

export default function IndexScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)
  return (
    <View>
      <Text style={styles.title}>Show Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  trashIcon: {
    fontSize: 24,
  },
})
