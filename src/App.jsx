import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let nColor = '';
  if (count > 0) {
    nColor = 'green';
  } else if (count < 0) {
    nColor = 'red';
  } else {
    nColor = 'white';
  }

  return (
    <section className='counter-section'>
      <div className='container-counter'>
        <h1 style={{fontSize: '40px'}}>Counter App</h1>
        <p id='counter' style={{color: nColor}}>{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>- Subtract</button>
          <button onClick={() => setCount(0)}>! Reset</button>
          <button onClick={() => setCount(count + 1)}>+ Add</button>
        </div>
      </div>
    </section>
  )
}

export default App
