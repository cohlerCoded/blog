import React, { useState } from 'react'

const BlogContext = React.createContext()

const blogs = [
  { title: 'meow', user: 'onlysaysmeow', body: 'meow' },
  { title: 'Boo Everyone!!!', user: 'hater', body: "I don't like people!" },
  { title: 'Woof!', user: 'imadog', body: 'Woof woof!' },
]

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState(blogs)

  const addBlogPost = (blog) => setBlogPosts([...blogPosts, blog])

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
