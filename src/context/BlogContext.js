import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    case 'EDIT_BLOGPOST':
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      )
    case 'DELETE_BLOGPOST':
      return state.filter((blog) => blog.id !== action.payload)
    default:
      return state
  }
}
const blogs = [
  { title: 'meow', id: 'onlysaysmeow', content: 'meow' },
  { title: 'Boo Everyone!!!', id: 'hater', content: "I don't like people!" },
  { title: 'Woof!', id: 'imadog', content: 'Woof woof!' },
]

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } })
    callback && callback()
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } })
    callback && callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id })
  }
}
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  blogs
)
