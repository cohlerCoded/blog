import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

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
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
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
