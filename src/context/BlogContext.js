import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, action.payload]
    default:
      return state
  }
}
const blogs = [
  { title: 'meow', user: 'onlysaysmeow', body: 'meow' },
  { title: 'Boo Everyone!!!', user: 'hater', body: "I don't like people!" },
  { title: 'Woof!', user: 'imadog', body: 'Woof woof!' },
]

const addBlogPost = (blog) => {
  dispatch({ type: 'ADD_BLOGPOST', payload: blog })
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)
