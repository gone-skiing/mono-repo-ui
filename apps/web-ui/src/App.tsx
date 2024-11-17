import { useState } from 'react'
import './App.css'
import { Button } from '@mono/library';
import { addRandomTo } from '@mono/utils';

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>Mono repo example</h1>
      <div className="card">
        <Button onClick={() => setValue((count) => addRandomTo(count))}>
          Current value is {value}
        </Button>
      </div>
    </>
  )
}

export default App
