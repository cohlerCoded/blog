import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Button title='Add' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost, i) => `${i}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.id}</Text>
              <Feather style={styles.trashIcon} name='trash-2' />
            </View>
          )
        }}
      />
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
