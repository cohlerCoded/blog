import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999999),
          title: `Test number ${state.length + 1}`,
        },
      ]
    default:
      return state
  }
}
const blogs = [
  { title: 'meow', user: 'onlysaysmeow', body: 'meow' },
  { title: 'Boo Everyone!!!', user: 'hater', body: "I don't like people!" },
  { title: 'Woof!', user: 'imadog', body: 'Woof woof!' },
]

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }
}
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)
