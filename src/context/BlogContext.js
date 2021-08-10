import React from 'react'

const BlogContext = React.createContext()

const blogPosts = [
  { title: 'meow', user: 'onlysaysmeow', body: 'meow' },
  { title: 'Boo Everyone!!!', user: 'hater', body: "I don't like people!" },
  { title: 'Woof!', user: 'imadog', body: 'Woof woof!' },
]
export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  )
}

export default BlogContext
