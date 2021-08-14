import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

export default function EditScreen({ navigation }) {
  const { addBlogPost, state } = useContext(Context)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  return <BlogPostForm />
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
