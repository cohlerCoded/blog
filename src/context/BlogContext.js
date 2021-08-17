import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload
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

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get('/blogposts')

    dispatch({ type: 'GET_BLOGPOSTS', payload: res.data })
  }
}
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
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
