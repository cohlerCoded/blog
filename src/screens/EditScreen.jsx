import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/BlogContext'

export default function EditScreen({ navigation }) {
  const { addBlogPost, state } = useContext(Context)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
        placeholder='Blog Title'
        style={styles.input}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
        placeholder='Say Something...'
        style={styles.input}
      />
      <Button
        title='Add Blog Post'
        style={styles.button}
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate('Index'))
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
  },
  input: {
    marginBottom: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
})
