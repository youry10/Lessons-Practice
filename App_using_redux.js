import React from "react";
import {useDispatch, useSelector} from 'react-redux'


function App() {
  const counter = useSelector(({counter}) => counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h4>{counter}</h4>
      <button onClick={() => dispatch({type : 'INC'})}>Increment</button>
      <button onClick={() => dispatch({type : 'DEC'})}>Decrement</button>
      <button onClick={() => dispatch({type : 'RESET'})}>Reset</button>
      
    </div>
  )
}

export default App