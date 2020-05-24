import React from 'react'
import { makeAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(makeAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={createAnecdote}>
      <h2>create new</h2>
      <div><input name='anecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm