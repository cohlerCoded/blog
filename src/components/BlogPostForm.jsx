import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const { title: blogTitle, content: blogContent } = initialValues
  const [title, setTitle] = useState(blogTitle || '')
  const [content, setContent] = useState(blogContent || '')

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder='Blog Title'
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder='Say Something...'
        style={styles.input}
      />
      <Button
        title='Submit'
        style={styles.button}
        onPress={() => onSubmit(title, content)}
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

export default BlogPostForm
