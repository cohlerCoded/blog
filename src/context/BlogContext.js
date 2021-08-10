import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = () => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>
}
