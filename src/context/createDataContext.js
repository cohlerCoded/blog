import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, reducer] = useReducer(reducer, initialState)

    return <Context.Provider value={{ state }}>{children}</Context.Provider>
  }

  return { Context, Provider }
}
