import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context)

  const id = navigation.getParam('id')

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{
        title: blogPost.title,
        content: blogPost.content,
      }}
      onSubmit={(title, content) => editBlogPost(id, title, content)}
    />
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

export default EditScreen
