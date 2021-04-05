import React, {useState, useEffect} from 'react'
import './App.css'
const url = 'https://jsonplaceholder.typicode.com/todos'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [todos, setTodos] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  const inCounter = () => {
    setCounter(counter + 1)
  }

  const fetchTodos = async () => {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setTimeout(() => {
      setTodos(data)
      console.log(data)
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchTodos()
  }, [counter])

  return (
  <>
    <h1 onClick={inCounter}>Hello {counter}</h1>

    {!todos.length && isLoading && (
      <h1>LOADING DATA ...</h1>
    )}

    {!!todos.length && (
      <>
        <hr />
          <h3>{todos[0].title} - {todos[0].completed.toString()}</h3>
        <hr />
      </>
    )}
  </>
  )
}

export default App
